import { Router } from "express";
import { createCollection, deleteCollection, getCollection, updateCollection } from "../controllers/collection.controller.js";

const router = Router();


router.route("/create").post(createCollection);
router.route("/update").patch(updateCollection);
router.route("/get").get(getCollection);
router.route("/delete").delete(deleteCollection);





export default router;
