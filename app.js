require('dotenv').config();

// Imports
const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const homeRouter = require('./routes/home.router');
const authRouter = require('./routes/auth.router');
const renderSessionMiddleware = require('./middlewares/render-session.middleware');

// Récuperation des données du fichier « .env »
const { PORT, NODE_ENV, SESSION_SECRET } = process.env;

// Initialisation du serveur Web
const app = express();

// - Config du moteur de vue
app.engine('mst', mustacheExpress());
app.set('view engine', 'mst');
app.set('views', './views');

// - Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
}));
app.use(renderSessionMiddleware());

// - Ajout du Routing
app.use(homeRouter);
app.use(authRouter);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Web Server is running on ${PORT} (${NODE_ENV})`);
});