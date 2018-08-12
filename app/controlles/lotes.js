
module.exports.ReaderLotes = (app)=>{
    return app.app.model.reader.ExeReader(app, 'radcheck',``);
}
module.exports.CreateLotes = (app,dados)=>{
    return app.app.model.create.ExeCreate(app,'',dados);
}

module.exports.DellLotes = (app,id)=>{
    return app.app.model.delete.ExeDelete(app, 'radcheck', `WHERE id = '${id}'`);
}

module.exports.UpdateLotes = (app,dados,id)=>{
    return app.app.model.update.ExeUpdate(app, 'radcheck',dados,`WHERE id = '${id}'`);
}