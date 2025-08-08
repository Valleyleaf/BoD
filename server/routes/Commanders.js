import express from "express";
import { getAllCommanders, getCommanderById, getCommanderBySlug } from "../Controllers/commanderController.js";
const router = express.Router();

router.get("/", getAllCommanders);
router.get("/id/:id", getCommanderById);
router.get("/slug/:slug", getCommanderBySlug);

export default router;

// This file defines the routes for commanders. Directs data to controllers for processing.