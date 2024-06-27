const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

// Criar uma postagem
router.post('/', async (req, res) => {
  try {
    const { userId, content, media } = req.body;
    const post = new Post({ userId, content, media });
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Obter todas as postagens
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().populate('userId', 'username profilePicture');
    res.send(posts);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
