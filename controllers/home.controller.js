const homeController = {

    index: (req, res) => {
        const today = new Date().toLocaleDateString('fr-be'); 

        console.log(req.session);

        const viewData = {
            today,
            username: req.session.user?.name
        };
        res.render('home/index', viewData);
    },

    about: (req, res) => {
        res.render('home/about');
    },

    error: (req, res) => {
        res.render('home/error');
    },

    protected: (req, res) => {
        // Test si l'utilisateur est connecté
        
        if(!req.session.isLog) {
            res.redirect('/login');
            return;
        }

        if(req.session.user.role !== 'Admin') {
            res.redirect('/error');
            return;
        }

        res.render('home/protected');
    }

};

module.exports = homeController;