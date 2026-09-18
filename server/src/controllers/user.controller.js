import { asynHandler } from "../utils/asyncHandler.js";

export const userRegister = asynHandler( async (req,res) => {
    res.status(200).json({
        message: "ok"
    })
} )