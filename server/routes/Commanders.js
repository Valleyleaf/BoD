import express from "express";
<<<<<<< HEAD
import Commander from "../models/Commander.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const commanders = await Commander.find();
  res.json(commanders);
});

router.get("/slug/:slug", async (req, res) => {
  const commander = await Commander.findOne({ slug: req.params.slug });
  if (!commander) return res.status(404).json({ error: "Not found" });
  res.json(commander);
});

router.get("/:id", async (req, res) => {
  const commander = await Commander.findById(req.params.id);
  if (!commander) return res.status(404).json({ error: "Not found" });
  res.json(commander);
});
=======
import { getAllCommanders, getCommanderById, getCommanderBySlug } from "../Controllers/commanderController.js";
const router = express.Router();

router.get("/", getAllCommanders);
router.get("/id/:id", getCommanderById);
router.get("/slug/:slug", getCommanderBySlug);
>>>>>>> 11835c2824be139d2910a197ac6798b62ef160da

export default router;

// This file defines the routes for commanders. Directs data to controllers for processing.