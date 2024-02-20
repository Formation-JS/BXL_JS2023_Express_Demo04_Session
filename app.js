require('dotenv').config();

// Imports
const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const homeRouter = require('./routes/home.router');
const authRouter = require('./routes/auth.router');

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

app.use((req, res, next) => {

    res.originalRender = res.render;

    res.render = (view, data, callback) => {

        let dataWithSession;
        if(data) {
            dataWithSession = { session: req.session, ...data };
        }
        else {
            dataWithSession = { session: req.session }
        }

        res.originalRender(view, dataWithSession, callback)
    };
    next();
})

// - Ajout du Routing
app.use(homeRouter);
app.use(authRouter);

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Web Server is running on ${PORT} (${NODE_ENV})`);
});