const express = require('express');
const adminController = require('../controllers/AdminController');
const validateJWT = require('../controllers/middlewares/validateJWT');

const adminRoutes = express.Router();

adminRoutes.post('/manage', validateJWT, adminController.createUserAdmin);
adminRoutes.delete('/manage/:id', validateJWT, adminController.deleteUser);

module.exports = adminRoutes;