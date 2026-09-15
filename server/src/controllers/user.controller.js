import { asynHandler } from "../utils/asyncHandler";

export const userRegister = asynHandler( async (req,res) => {
    res.status(200).json({
        message: "ok"
    })
} )