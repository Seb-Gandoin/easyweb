const express = require('express');
const router = express.Router();
const LandingPage = require('../models/landingPage');

// Créer une landing page
router.post('/', async (req, res) => {
  try {
    const newPage = new LandingPage(req.body);
    const savedPage = await newPage.save();
    res.status(201).json(savedPage);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Obtenir toutes les landing pages
router.get('/', async (req, res) => {
  try {
    const pages = await LandingPage.find();
    res.json(pages);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
