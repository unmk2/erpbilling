module.exports = (app)=>{
    var modulo = 'parametros'
    app.get('/parametros/:pg?',(req,res)=>{
        var pg  = req.params.pg;
        /** Passamos este objeto para a nossa viewl para que amesma possa montar o menu */
        var men = app.app.controlles.menu.menu(app, req, res);
        var dados = app.app.controlles.parametros.ReaderParametros(app);


        res.render('parametros',{menu:men,pg:pg,dados:dados})
    });

    app.post(`/${modulo}.add`, (req, res) => {
        var dados = req.body;
        
        
        var grava = app.app.model.create.create(app,`${modulo}`,dados);

        console.log(grava);

        res.redirect(`/${modulo}`);
    });

}