import { Router } from "express";
import { createOrder, deleteOrder, getOrder, updateOrder } from "../controllers/order.controller.js";

const router = Router();


router.route("/create").post(createOrder);
router.route("/update").patch(updateOrder);
router.route("/get").get(getOrder);
router.route("/delete").delete(deleteOrder);





export default router;
