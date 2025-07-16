import express from "express";
import Item from "../models/Item.js";

const router = express.Router();

router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

router.get("/:id", async (req, res) => {
  const item = await Item.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
});

export default router;