// src/routes/index.js
const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// Définir une route de base
router.get('/', homeController.getHomePage);

module.exports = router;
