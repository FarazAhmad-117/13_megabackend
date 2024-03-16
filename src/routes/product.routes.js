import { Router } from "express";
import { createProduct, deleteProduct, getProduct, updateProduct } from "../controllers/product.controller.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();


router.route("/create").post(
    upload.array('images'),
    createProduct
);
router.route("/update").patch(updateProduct);
router.route("/get").get(getProduct);
router.route("/delete").delete(deleteProduct);





export default router;
