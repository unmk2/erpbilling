module.exports.ReaderCards = (app,parametros = ``) =>{

}

module.exports.CreateCards = (app,lote,rand,tempo,datac,horac,id_plano,valor,pedido) =>{

    var dados = { lote: lote, bilhete: rand, datac: datac, horac: horac, tempo: tempo,id_plano:id_plano,valor_plano:valor,pedido:pedido,st:0}

    return app.app.model.create.ExeCreate(app,`bilhetes`,dados);
}