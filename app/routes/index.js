module.exports = (app)=>{

    /**
     * Rota Principal
     */
    app.get('/',(req,res)=>{
        
        /** verifica se tem uma session iniciada */
        if (req.session.autorizado) {
            /**
            * Passamos este objeto para a nossa viewl para que amesma possa montar o menu
            */
            var mem = app.app.controlles.menu.menu(app, req, res);
            res.render('index', { menu: mem, page: null });
            
        }else{
            /** se não tiver uma session ativa redireciona para o login */
            res.render('login');
        }
  
    });

    /**
     * Rota responsavel por destruir uma serrion ativa
     */
    app.get('/sair', (req, res) => {
        req.session.autorizado  = false;
        req.session.id          = null;
        req.session.login       = null;  
        res.redirect('/');
    });
};