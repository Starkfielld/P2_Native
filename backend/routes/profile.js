// routes/profile.js

const express = require('express');
const Profile = require('../models/Profile');

const router = express.Router();

// Criar perfil de usuário
router.post('/', async (req, res) => {
  try {
    const { username, email, bio, profilePicture } = req.body;
    const profile = new Profile({ username, email, bio, profilePicture });
    await profile.save();
    res.status(201).send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obter perfil de usuário por ID
router.get('/:id', async (req, res) => {
  try {
    const profile = await Profile.findById(req.params.id);
    if (!profile) {
      return res.status(404).send({ error: 'Perfil não encontrado' });
    }
    res.send(profile);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
