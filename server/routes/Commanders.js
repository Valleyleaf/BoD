import express from "express";
import { getAllCommanders, getCommanderById } from "../Controllers/commanderController.js";
const router = express.Router();

router.get("/", getAllCommanders);
router.get("/:id", getCommanderById);

export default router;