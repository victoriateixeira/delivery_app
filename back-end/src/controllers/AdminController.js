const adminService = require('../services/AdminService');

const createUserAdmin = async (req, res) => {
  const user = req.body;
  console.log(user);
  try {
    const result = await adminService.createUserAdmin(user);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  const users = await adminService.deleteUser(id);
  res.status(204).json(users);
};

module.exports = {
  createUserAdmin,
  deleteUser,
};