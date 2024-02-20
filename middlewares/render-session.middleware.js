
// Fonction qui renvoi le middleware
function renderSessionMiddleware() {

    // Le middleware
    return (req, res, next) => {

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
    };

};

module.exports = renderSessionMiddleware;