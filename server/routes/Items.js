import express from "express";
import { getAllItems, getItemById } from "../Controllers/itemsController.js";
const router = express.Router();

router.get("/", getAllItems);
router.get("/:id", getItemById);

export default router;