import { Router } from "express"
import { userRegister } from "../controllers/user.controller.js";
import { Upload } from "../middlewars/multer.middlegware.js"

const router = Router();

router.route("/register").post(
    Upload.single("avatar"),
    userRegister
)

export default router;