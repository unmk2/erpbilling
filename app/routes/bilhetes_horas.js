module.exports = (app) =>{
    app.get('/bilhetes_horas/:pg?', (req, res) => {
        /** Passamos este parametro para a view para que a mesma possa entender a diferença de cadastro para listagem */
        var pg = req.params.pg;
        /** Passamos este objeto para a nossa viewl para que amesma possa montar o menu */
        var men = app.app.controlles.menu.menu(app, req, res);


        if(pg == 'cad'){
            var parametros = app.app.controlles.parametros.ReaderParametros(app);
        }else{
            var parametros = null;
        }

        res.render('bilhetes_horas', { menu: men, pg: pg, parametros: parametros});

    });
    app.post('/bilhetes_horas.add', (req, res) => {
        var dados = req.body;
        res.send(dados);
    });
}