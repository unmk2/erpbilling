module.exports = (app) =>{
    app.get('/lotes', (req, res) => {
        /** verifica se tem uma session iniciada */
        if (req.session.autorizado) {
            /**
             * Passamos este objeto para a nossa viewl para que amesma possa montar o menu
             */
            var mem = app.app.controlles.menu.menu(app, req, res);
            res.render('lotes', { menu: mem});
        } else {
            /** se não tiver uma session ativa redireciona para o login */
            res.render('login');
        }
    });
}