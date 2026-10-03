import { ApiError } from "../utils/ApiError.js";
import { asynHandler } from "../utils/asyncHandler.js";
import { registerBackendSchema } from "../utils/formValidation.js";
import { User } from "../models/user.model.js"
import { cloudinaryData } from "../utils/cloudinary.js"

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

    const result = registerBackendSchema.safeParse({body: req.body});

    if (!result.success) {
        result.error.issues.forEach(issue => {
            throw new ApiError(400, issue.message)
        })
    }

    // const existedUser = await User.findOne({
    //     $or: [ { userName } , { email } ]
    // })

    // console.log("after mongoose query",existedUser)

    
    // if(existedUser) {
    //     throw new ApiError(401, "The user name or email is already existed")
    // }

    // const reqfiles = req.file?.avatar[0]?.path;

    // console.log("muter called",reqfiles);

    // const avatar = await cloudinaryData(reqfiles);

    // console.log(avatar)

    }
)