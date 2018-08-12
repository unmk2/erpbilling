module.exports = (app)=>{

    app.get('/lab',(req,res)=>{
        res.render('lab');
    })

    app.get('/get_menu', (req, res) => {
        var conn = app.config.dbSyncSql();
        var mem = app.app.controlles.menu.menu(app,req,res);
        res.render('index', { menu: mem });

    });

    app.get('/randon',(req,res)=>{
       var rand =  app.app.controlles.randon.ExeRandon(app,10,0,1,1);

        res.send(rand);
    })

    app.get('/alerta/:id?',(req,res)=>{
        console.log('oi');

        var id = req.params.id;
        var quebra = id.split('&');
        console.log(quebra);
        res.send(req.params.id);

    })
}