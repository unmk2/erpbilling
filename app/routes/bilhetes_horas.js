module.exports = (app) =>{
    app.get('/bilhetes_horas/:pg?', (req, res) => {
        /** Passamos este parametro para a view para que a mesma possa entender a diferença de cadastro para listagem */
        var pg = req.params.pg;
        /** Passamos este objeto para a nossa viewl para que amesma possa montar o menu */
        var men = app.app.controlles.menu.menu(app, req, res);


        if(pg == 'cad'){
            var parametros = app.app.controlles.parametros.ReaderParametros(app);
            var planos = app.app.controlles.planos.ReaderPlanos(app);
        }else{
            var parametros = null;
        }

        res.render('bilhetes_horas', { menu: men, pg: pg, parametros: parametros, planos: planos});

    });
    app.post('/bilhetes_horas.add', (req, res) => {
        var dados = req.body;

        var tempo = dados.tempo*60;
        dados.total_tempo = tempo;

        var dados_config = app.app.controlles.parametros.ReaderParametros(app, `WHERE id = ${dados.param}`);
        dados.conf = dados_config;


        var plano_conf = app.app.controlles.planos.ReaderPlanos(app, `WHERE id = ${dados.plano}`);
        dados.conf_plano = plano_conf;
      

        console.log('tamanho ' + dados.tamanho);
        console.log('numero ' + dados_config[0].numero);
        console.log('maiuscula ' + dados_config[0].maiuscula);
        console.log('simbolo ' + dados_config[0].simbolo);
        const datatime = require('node-datetime');
        var datac = datatime.create().format('Y-m-d');
        var dataclote = datatime.create().format('YmdHMS');
        var horac = datatime.create().format('H:M:S');
        var lote  = dados.lote;
        var obj = [];
        for(var i = 0;dados.qtd > i;i++){
            
            var rand = app.app.controlles.randon.ExeRandon(app, dados.tamanho, dados_config[0].numero, dados_config[0].maiuscula, dados_config[0].simbolo);


            var resultado = 'ID ' + i + ' LOTE ' + lote + '-' + dataclote  + ' RAND ' + rand + ' PLANO ' + plano_conf[0].groupname + ' TEMPO ' + tempo + ' ID-plano ' + plano_conf[0].id + ' DATAC ' + datac + ' HORAC ' + horac + ' VALOR_PLANO ' + plano_conf[0].valor;
            obj.push(resultado);
        }
        dados.obj = obj;
        res.send(dados);
    });
}