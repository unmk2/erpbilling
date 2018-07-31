module.exports = (app)=>{

    app.get('/lab',(req,res)=>{
        res.render('lab');
    })

    app.get('/get_menu', (req, res) => {
        var conn = app.config.dbSyncSql();
        var mem = app.app.controlles.menu.menu(app,req,res);

        //var teste = require('/home/alexandre/VisualProject/erpbilling/app/controlles/menu.js')
        
        res.send(mem);
        //res.render('index', { menu: mem });

    });

}