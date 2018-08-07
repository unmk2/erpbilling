module.exports.ExeUpdate = (app, base, dados, termos) => {
    var conn = app.config.dbSyncSql();

    var obj_key = Object.keys(dados);
    var keys = obj_key.join(',');
    var campos = [];
    obj_key.forEach(files => {
        var valor = dados[files];

        var linhas = files + '=' + "'" + valor + "'";
        campos.push(linhas);

        //console.log(dados.nome);
    })
    var resultado = campos.join(",");

    var sql = `UPDATE ${base} SET ${resultado} ${termos} `;
    return conn.query(sql);
}