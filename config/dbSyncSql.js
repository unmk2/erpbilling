var MySql = require('sync-mysql');

var connMysqlSync = function () {
    //console.log('Conexão com bd foi estabelecida');

    return new MySql({
        //host      : '165.227.55.153',
        host: '127.0.0.1',
        user: 'alexandre',
        password: '455ttte',
        database: 'tributo'
    })

}

module.exports = function () {
    //console.log('Função preparada pelo autoload');
    return connMysqlSync;
}