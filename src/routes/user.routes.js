import { Router } from "express";
import { login, registerUser, update } from "../controllers/user.controller.js";
import {upload} from "./../middleware/multer.middleware.js";

const router = Router();

router.route("/register").post(upload.fields([
    {
        name: 'avatar',
        maxCount:1
    }
]), registerUser);

router.route("/login").post(login);
router.route("/update").patch(update);

export default router;


