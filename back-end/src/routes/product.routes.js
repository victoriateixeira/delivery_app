const express = require('express');
const { ProductsController } = require('../controllers');

const router = express.Router();

router.get('/', ProductsController.getAllProducts);