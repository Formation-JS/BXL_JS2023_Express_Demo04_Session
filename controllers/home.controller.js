
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

    protected: (req, res) => {
        res.render('home/protected');
    }

};

module.exports = homeController;