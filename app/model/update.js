module.exports.ExeUpdate = (app, base, dados,termos)=>{
    var conn = app.config.dbSyncSql();

    var obj_key = Object.keys(dados);
    console.log(obj_key);

    var keys = obj_key.join(',');
    console.log(keys);
    var campos = [];
    obj_key.forEach(files => {
        var valor = dados[files] + "'";

        campos.push(valor);
        console.log(valor);
        //console.log(dados.nome);
    })
    console.log(campos);
    var resultado = "'" + campos.join("," + "'");

    console.log(resultado.split(','));
    console.log(resultado);

    //var sql = `UPDATE ${base} SET ${keys} ${termos} `;

    //console.log(sql);

    //return qr_result = conn.query(sql); 
}