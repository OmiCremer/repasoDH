const miPrimerMiddleware = (req, res, next) => {
    const usuarioActual = req.query.user;
    if (
        usuarioActual == "Ada" ||
        usuarioActual == "Greta" ||
        usuarioActual == "Vim" ||
        usuarioActual == "Tim"
    ) {
        req.admin = usuarioActual;
        next();
    } else {
        res.send("No tenes los privilegios para ingresar");
    }
};

module.exports = miPrimerMiddleware;
