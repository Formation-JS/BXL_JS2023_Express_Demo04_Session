const homeController = {

    index: (req, res) => {
        const today = new Date().toLocaleDateString('fr-be'); 

        const viewData = {
            today
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