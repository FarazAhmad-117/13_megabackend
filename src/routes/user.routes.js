import { Router } from "express";
import { login, registerUser, update } from "../controllers/user.controller.js";


const router = Router();

router.route("/register").post(registerUser);
router.route("/login").post(login);
router.route("/update").patch(update);

export default router;


