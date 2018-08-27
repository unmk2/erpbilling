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
        if (!dados.qr){
            dados.qr = 0;
        }
        if (!dados.numero){
            dados.numero = 0;
        }
        if (!dados.maiuscula){
            dados.maiuscula = 0;
        }
        if (!dados.minuscula){
            dados.minuscula = 0;
        }
        if (!dados.simbolo){
            dados.simbolo = 0;
        }
        if (!dados.st){
            dados.st = 0;
        }
        dados.tipo = 1  
        var grava = app.app.controlles.parametros.Create(app,dados);

        console.log(grava);

        res.redirect(`/${modulo}`);
    });
    app.get(`/${modulo}.edit/:id`,(req,res)=>{
        var id = req.params.id;
        var men = app.app.controlles.menu.menu(app, req, res);
        var cliente = app.app.controlles.cliente.Read(app, `WHERE id = ${id}`);
        var semestres = app.app.controlles.semestre.Read(app);
        var cursos = app.app.controlles.curso.Read(app);

        res.render(`${modulo}_edit`,{menu:men,cliente: cliente ,semestres:semestres,cursos:cursos});
    })
    
    app.post(`/${modulo}.edit/:id`, (req, res) => {
        var dados = req.body;
        var id  = req.params.id;

        var update = app.app.controlles.cliente.Update(app,dados,id);

        if(update){
            res.redirect(`/${modulo}`);
        }else{
            res.send('Erro ao atualizar os dados');
        }

    });
    app.get(`/${modulo}.dell/:id`, (req, res) => {
        var id = req.params.id;

        app.app.controlles.parametros.Dell(app, id);

        res.redirect(`/${modulo}`);
    });
}