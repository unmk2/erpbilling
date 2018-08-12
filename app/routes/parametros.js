module.exports = (app)=>{
    app.get('/parametros/:pg?',(req,res)=>{
        var pg  = req.params.pg;
        /** Passamos este objeto para a nossa viewl para que amesma possa montar o menu */
        var men = app.app.controlles.menu.menu(app, req, res);
        var dados = app.app.controlles.parametros.ReaderParametros(app);


        res.render('parametros',{menu:men,pg:pg,dados:dados})
    });
}