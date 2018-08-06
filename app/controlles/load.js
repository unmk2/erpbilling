module.exports.load = (req, res) => {
    if (req.session.autorizado) {

    } else {
        /** se não tiver uma session ativa redireciona para o login */
        res.redirect('/');
    }
}