const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const profileRoutes = require('./routes/profile');
require('dotenv').config();

const mongo = process.env.MONGO_URL
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(mongo)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.log(err));

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/profile', profileRoutes);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
