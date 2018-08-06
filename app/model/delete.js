module.exports.ExeDelete = (app, base, termos)=>{
    var conn = app.config.dbSyncSql();

    var linhas_dell = conn.queueQuery(`DELETE FROM ${base} ${termos}`)();

    return linhas_dell
}