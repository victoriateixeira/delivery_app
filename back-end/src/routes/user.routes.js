const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

// router.get('/', (_req, res) => res.json({ message: 'oi' }));
router.post('/register', userController.createUser);

module.exports = router;