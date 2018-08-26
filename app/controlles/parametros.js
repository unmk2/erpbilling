module.exports.ReaderParametros = (app,parametros = ``) =>{
    return app.app.model.reader.ExeReader(app, `configuracoes`, parametros);
}
module.exports.Create = (app,dados) => {
    
    return app.app.model.create.ExeCreate(app,`configuracoes`,dados);
}

/* Regra para deletar */
module.exports.Dell = (app,id)=>{
    return app.app.model.delete.ExeDelete(app,`configuracoes`,`WHERE id = '${id}'`);
}

module.exports.Edit = (app,id) => {

}
module.exports.Update = (app,dados,id) =>{
    
    return app.app.model.update.ExeUpdate(app, modulo, dados, `WHERE id = '${id}'`);
}