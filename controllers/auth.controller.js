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
        if(!['zaza', 'balthy'].find(name => name === username?.toLowerCase())  || password !== 'Test1234=') {
            
            const viewData = {
                errorMessage : 'Les credentials sont invalides'
            };
            res.render('auth/login', viewData);
            return
        }

        // Gestion de la session
        req.session.user = {
            name: username,
            role: username.toLowerCase() === 'balthy' ? 'Admin' : 'User'
        };
        req.session.isLog = true;

        // Redirection de l'utilisateur
        res.redirect('/');
    },

    logout: (req, res) => {
        
        // Clear la session
        req.session.destroy();

        // Redirection de l'utilisateur
        res.redirect('/');
    }
};

module.exports = authController;