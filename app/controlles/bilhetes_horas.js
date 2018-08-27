module.exports.ReadBilhete = (app,parametros = ``) =>{
    return app.app.model.reader.ExeReader(app,`bilhetes`,parametros);
}

module.exports.CreateCards = (app,lote,rand,tempo,datac,horac,id_plano,valor,pedido) =>{

    var dados = { lote: lote, bilhete: rand, datac: datac, horac: horac, tempo: tempo,id_plano:id_plano,valor_plano:valor,pedido:pedido,st:0}

    var criar_bilhete =  app.app.model.create.ExeCreate(app,`bilhetes`,dados);
        if(criar_bilhete){
            var cria_login = app.app.controlles.radius.CreateLogin(app, rand, '123456', tempo, pedido);
            var cria_login = app.app.controlles.radius.CreateTempo(app, rand, '123456', tempo, pedido); 
 
            return true;
        }else{
            return false;
        }

}