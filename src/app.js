// src/app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

//Routes
const homeRoute = require('./routes/homeRoute');

// Définir le moteur de template
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware pour parser les requêtes JSON
app.use(express.json());

// Définir des routes de base
app.use('/', homeRoute);

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
