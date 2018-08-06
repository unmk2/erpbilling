module.exports = (app) =>{
    app.get('/lotes', (req, res) => {

        /** Passamos este objeto para a nossa viewl para que amesma possa montar o menu */
        var men = app.app.controlles.menu.menu(app, req, res);
        /** Ler o conteudo do banco de dados */
        var sql = app.app.controlles.lotes.ReaderLotes(app);

        res.render('lotes', { menu: men,linhas:sql});

    });

    app.post('/lotes.edit', (req, res) => {
        var id = req.params.id;

        var dados = req.body;
        console.log(dados);

        app.app.controlles.lotes.UpdateLotes(app,dados,id);

        
        var men = app.app.controlles.menu.menu(app, req, res);
        var sql = app.app.controlles.lotes.ReaderLotes(app);
        res.render('lotes', { menu: men, linhas: sql });
    });

    app.get('/lotes.dell/:id', (req, res) => {
        var id = req.params.id;
        app.app.controlles.lotes.DellLotes(app,id);
        res.redirect('/lotes');
    });
}