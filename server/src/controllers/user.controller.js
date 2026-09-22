import { asynHandler } from "../utils/asyncHandler.js";

export const userRegister = asynHandler( async (req,res) => {

    //get users details from backend
    //validations
    //check user already exist
    
    res.status(200).json({
        message: "ok"
    })
} )