import { Router } from "express";
import { createCategory, deleteCategory, getCategory, updateCategory } from "../controllers/category.controller.js";


const router = Router();


router.route("/create").post(createCategory);
router.route("/update").patch(updateCategory);
router.route("/get").get(getCategory);
router.route("/delete").delete(deleteCategory);




export default router;

