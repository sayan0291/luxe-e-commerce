import {v2 as cloudinary } from "cloudinary"
import fs from "fs"
import CLOUD_NAME from "../constants.js"

cloudinary.config({
    cloud_name: CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

export const cloudinaryData = async (localFilePath) => {
    try {
        if(!localFilePath) return null;
        const response = cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })

        console.log("clodinary upload successfull",response)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath);
        console.log("clodinary upload error",error);
        return null;
    }
}