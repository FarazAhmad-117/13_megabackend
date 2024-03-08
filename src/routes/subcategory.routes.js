import { Router } from "express";
import { createSubCategory, deleteSubCategory, getSubCategory, updateSubCategory } from "../controllers/subcategory.controller.js";


const router = Router();


router.route("/create").post(createSubCategory);
router.route("/update").patch(updateSubCategory);
router.route("/get").get(getSubCategory);
router.route("/delete").delete(deleteSubCategory);




export default router;