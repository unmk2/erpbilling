module.exports = (app) =>{

    app.post('/login',(req,res)=>{
        var dados = req.body;
        var conn = app.config.dbSyncSql();


        var res_login = conn.queueQuery(`SELECT * FROM login WHERE login  = '${dados.login}' AND senha  = '${dados.senha}'`)();
        
        if (res_login.length > 0){
            req.session.autorizado  = true;
            req.session.id          = res_login[0].id;
            req.session.login       = res_login[0].id;

            res.redirect('/');
        }else{
            res.redirect('/');
        }
    });
}