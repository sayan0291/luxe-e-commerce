import { Routes } from "express"
import { userRegister } from "../controllers/user.controller";

const router = Routes();

router.route("/register").post(userRegister)

export default router;