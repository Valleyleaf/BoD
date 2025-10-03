import Items from "../models/Items.js";

export const getAllItems = async (req, res) => {
  const items = await Item.find();
  res.json(items);
};

export const getItemById = async (req, res) => {
  const item = await Items.findById(req.params.id);
  if (!item) return res.status(404).json({ error: "Not found" });
  res.json(item);
};