require('dotenv').config();

// Imports
const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const homeRouter = require('./routes/home.router');
const authRouter = require('./routes/auth.router');
const renderSessionMiddleware = require('./middlewares/render-session.middleware');
const morgan = require('morgan');

// Récuperation des données du fichier « .env »
const { PORT, NODE_ENV, SESSION_SECRET } = process.env;

// Initialisation du serveur Web
const app = express();

// - Config du moteur de vue
app.engine('mst', mustacheExpress());
app.set('view engine', 'mst');
app.set('views', './views');

// - Middlewares
//   Logger : https://github.com/expressjs/morgan?tab=readme-ov-file#write-logs-to-a-file
app.use(morgan(':method :url :status - :response-time ms'));
//   Formulaire 'x-www-form-urlencoded' -> Balise Form
app.use(express.urlencoded({ extended: true }));
//   Session
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET
}));
app.use(renderSessionMiddleware());

// - Ajout du Routing
app.use(homeRouter);
app.use(authRouter);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Web Server is running on ${PORT} (${NODE_ENV})`);
});