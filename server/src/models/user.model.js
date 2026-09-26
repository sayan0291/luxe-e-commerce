import mongoose , { Schema } from "mongoose";
import { bcrypt } from "bcrypt"
import jwt from "jsonwebtoken"

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
        },
        avatar: {
            type: String
        }
    }, {timestamps: true}
)

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();

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

userSchema.methods.getAccessToken = async function () {
    jwt.sign(
        {
            _id: this._id,
            userName: this.userName
        },
        process.env.ACCESSTOKEN_SECRET_KEY,
        {
            expiresIn: process.env.ACCESSTOKEN_SECRET_EXPIRY
        }
    )
}

userSchema.methods.getRefreshToken = async function () {
    jwt.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_SECRET_KEY,
        {
            expiresIn: process.env.REFRESH_SECRET_EXPIRY
        }
    )
}

export const User = mongoose.model("user",userSchema)