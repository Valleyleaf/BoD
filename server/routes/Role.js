import express from "express";
import { getAllRoles, getRoleById } from "../Controllers/roleController.js";
const router = express.Router();

router.get("/", getAllRoles);
router.get("/:id", getRoleById);

export default router;