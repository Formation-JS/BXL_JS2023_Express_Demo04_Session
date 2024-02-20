require('dotenv').config();

// Imports
const express = require('express');
const homeRouter = require('./routes/home.router');
const authRouter = require('./routes/auth.router');

// Récuperation des données du fichier « .env »
const { PORT, NODE_ENV } = process.env;

// Initialisation du serveur Web
const app = express();

// - Middleware

// - Ajout du Routing
app.use(homeRouter);
app.use(authRouter);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Web Server is running on ${PORT} (${NODE_ENV})`);
});