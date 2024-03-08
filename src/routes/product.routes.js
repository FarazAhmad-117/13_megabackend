import { Router } from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller.js";

const router = Router();


router.route("/create").post(createProduct);
router.route("/update").patch(updateProduct);
router.route("/get").get(getProduct);
router.route("/delete").delete(deleteProduct);





export default router;
