const express = require('express');
const adminController = require('../controllers/AdminController');

const adminRoutes = express.Router();
// router.get('/', (_req, res) => res.json({ message: 'oi' }));
adminRoutes.post('/manage', adminController.createUserAdmin);

module.exports = adminRoutes;