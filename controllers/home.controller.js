const homeController = {

    index: (req, res) => {
        res.render('home/index.mst');
    },

    about: (req, res) => {
        res.sendStatus(501);
    },

    protected: (req, res) => {
        res.sendStatus(501);
    }

};

module.exports = homeController;