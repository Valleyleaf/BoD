import Items from "../models/Items.js";

export const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

export const getItemById = async (req, res) => {
  const commander = await Commander.findById(req.params.id);
  if (!commander) return res.status(404).json({ error: "Not found" });
  res.json(commander);
};