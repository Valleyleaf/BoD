import Commander from "../models/Commander.js";

export const getAllCommanders = async (req, res) => {
  const commanders = await Commander.find();
  res.json(commanders);
};

export const getCommanderById = async (req, res) => {
  const commander = await Commander.findById(req.params.id);
  if (!commander) return res.status(404).json({ error: "Not found" });
  res.json(commander);
};