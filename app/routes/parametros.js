module.exports = (app)=>{
    app.get('/parametros',(req,res)=>{

        /** verifica se tem uma session iniciada */
        var load = app.app.controlles.load.load(req, res);

        /** Passamos este objeto para a nossa viewl para que amesma possa montar o menu */
        var men = app.app.controlles.menu.menu(app, req, res);

        res.render('parametros',{menu:men})
    });
}