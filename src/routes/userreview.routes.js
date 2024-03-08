import { Router } from "express";
import { createUserReview, deleteUserReview, getUserReview, updateUserReview } from "../controllers/userreview.controller.js";

const router = Router();


router.route("/create").post(createUserReview);
router.route("/update").patch(updateUserReview);
router.route("/get").get(getUserReview);
router.route("/delete").delete(deleteUserReview);





export default router;
