import Role from "../models/Role.js";

export const getAllRoles = async (req, res) => {
  const roles = await Role.find();
  res.json(roles);
};

export const getRoleById = async (req, res) => {
  const role = await Role.findById(req.params.id);
  if (!role) return res.status(404).json({ error: "Not found" });
  res.json(role);
};