const express = require('express');
const userController = require('../controllers/UserController');

const router = express.Router();

router.post('/login', userController.findUser);
router.post('/register', userController.createUser);
router.get('/', userController.findAll);

module.exports = router;
