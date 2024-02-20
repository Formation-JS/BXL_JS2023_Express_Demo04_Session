const authController = {

    // TODO Les méthodes "register" sont a implementé quand il y a une DB :)
    register: (req, res) => {
        res.sendStatus(501);
    },
    register_POST: (req, res) => {
        res.sendStatus(501);
    },

    login: (req, res) => {
        res.render('auth/login')
    },
    login_POST: (req, res) => {
        // Récuperation des données du body
        const { username, password } = req.body;

        // Test (basique) des credentials 
        if(username?.toLowerCase() !== 'zaza' || password !== 'Test1234=') {
            
            const viewData = {
                errorMessage : 'Les credentials sont invalides'
            };
            res.render('auth/login', viewData);
            return
        }

        // TODO Gestion de la session

        // Redirection de l'utilisateur
        res.redirect('/');
    },

    logout: (req, res) => {
        
        // TODO Clear la session

        // Redirection de l'utilisateur
        res.redirect('/');
    }
};

module.exports = authController;