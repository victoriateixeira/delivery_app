const adminService = require('../services/AdminService');

const createUserAdmin = async (req, res) => {
  const user = req.body;
  try {
    const result = await adminService.createUserAdmin(user);
    return res.status(201).json(result);
  } catch (err) {
    return res.status(409).json({ message: err.message });
  }
};

module.exports = {
createUserAdmin,
};