const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importer les routes
const userRoutes = require('./routes/userRoutes');
const landingPageRoutes = require('./routes/landingPageRoutes');

// Initialiser l'app Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connexion à MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.log('MongoDB connection error: ', error));

// Route de test
app.get('/', (req, res) => {
  res.send('Welcome to EasyWeb API!');
});

// Utiliser les routes
app.use('/api/users', userRoutes);
app.use('/api/landing-pages', landingPageRoutes);

// Définir le port et lancer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
