import mongoose,{ Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
    {
        fullName: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        mobileNo: {
            type: Number,
            default: ""
        },
        role: {
            type: String,
            enum: ["admin","seller","customer"],
            default: "customer",
            required: true
        },
        refreshToken: {
            type: String
        }
    },{ timestamps: true }
)

userSchema.pre("save", async function () {
    if(!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,10);
})

userSchema.methods.isCorrectPassword = async function (password) {
    return await bcrypt.compare(password,this.password)
}

userSchema.methods.getAccessToken = async function (params) {
    
}

export const User = mongoose.model("User",userSchema)