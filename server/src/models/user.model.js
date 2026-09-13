import mongoose , { Schema } from "mongoose";
import { bcrypt } from "bcrypt"

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            minLength: 5
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        password: {
            type: String,
            required: true,
            minLength: [8,"minimum 8 characters"]
        }
    }, {timestamps: true}
)

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next;

    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password , salt);
        next();
    } catch (error) {
        next(error);
    }
});

userSchema.methods.isCorrectPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword , this.password)
}

export const User = mongoose.model("user",userSchema)