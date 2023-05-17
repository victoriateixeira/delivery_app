const express = require('express');
const adminController = require('../controllers/AdminController');

const adminRoutes = express.Router();

adminRoutes.post('/manage', adminController.createUserAdmin);
adminRoutes.delete('/manage/:id', adminController.deleteUser);

module.exports = adminRoutes;