module.exports.ReaderParametros = (app,parametros = ``) =>{
    return app.app.model.reader.ExeReader(app, `configuracoes`, parametros);
}
module.exports.CreateParametros = (app,dados) => {
    
    return app.app.model.create.ExeCreate(app,dados);
}
module.exports.DellParametros = (app,id) => {

}

module.exports.EditParametros = (app,id) => {

}