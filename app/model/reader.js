module.exports.ExeReader = (app, base,query = ``,termos = ``) => {
    var conn = app.config.dbSyncSql();

    if(termos == ``){
        var t = '*';
    }else{
        var t = termos;
    }
    
    return conn.queueQuery(`SELECT ${t} FROM ${base} ${query}`)();
}