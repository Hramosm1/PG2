const express = require('express');
const router = express.Router();
const loginService = require('../services/loginService');

// POST /api/login
router.post('/', async (req, res) => {
  try {
    const { identifier, password } = req.body;
    const token = await loginService.loginUser(identifier, password);
    res.status(200).json({ message: 'Inicio de sesión exitoso', token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
