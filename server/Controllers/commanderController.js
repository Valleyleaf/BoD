import Commander from "../models/Commanders.js";


export const getAllCommanders = async (req, res) => {
  try {
    const commanders = await Commander.find();
    res.json(commanders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


export const getCommanderById = async (req, res) => {
  try {
    const commander = await Commander.findById(req.params.id).populate("lore");
    if (!commander) return res.status(404).json({ error: "Commander not found" });
    res.json(commander);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getCommanderBySlug = async (req, res) => {
  try {
    const commander = await Commander.findOne({ slug: req.params.slug }).populate("lore");
    if (!commander) return res.status(404).json({ error: "Commander not found" });
    res.json(commander);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//Extracts data and returns it to routes which sends it to client.