import { asynHandler } from "../utils/asyncHandler.js";

export const userRegister = asynHandler( async (req,res) => {

    //get users details from backend
    //validations
    //check user already exist
    //clodinary
    //create user object - create entry in db
    //remove password and refresh token field
    //check for user creation
    //response check
    
    const { userName,email,password } = req.body
    console.log(email)

} )