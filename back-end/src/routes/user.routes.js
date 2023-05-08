const express = require('express');
const userController = require('../controller/UserController');

const router = express.Router();

// router.get('/', (_req, res) => res.json({ message: 'oi' }));
router.post('/', userController.createUser);

module.exports = router;