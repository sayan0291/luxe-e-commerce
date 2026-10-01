import { validationRequest } from "../middlewars/validators.js";
import { ApiError } from "../utils/ApiError.js";
import { asynHandler } from "../utils/asyncHandler.js";
import { registerBackendSchema } from "../utils/formValidation.js";
import { User } from "../models/user.model.js"

export const userRegister = asynHandler( async (req,res) => {

    //get users details from backend
    //validations
    //check user already exist
    //clodinary
    //create user object - create entry in db
    //remove password and refresh token field
    //check for user creation
    //response check
    
    const { userName,email,password } = req.body;
    console.log("reqest is",req.body)

    const result = registerBackendSchema.safeParse(req.body);

    // console.log(result)

    // const existedUser = User.findOne({
    //     $or: [{ userName },{email}]
    // })

    // if(existedUser) {
    //     throw new ApiError(401, "The user name or email is already existed")
    // }

    const reqfiles = req.file?.avatar[0]?.path;

    console.log(reqfiles)

}
)