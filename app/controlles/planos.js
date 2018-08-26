module.exports.ReaderPlanos = (app,parametros = ``)=>{

    return app.app.model.reader.ExeReader(app,`radgroupcheck`,parametros);
}