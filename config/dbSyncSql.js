var MySql = require('sync-mysql');

var connMysqlSync = function () {
    //console.log('Conexão com bd foi estabelecida');

    return new MySql({
        //host      : '165.227.55.153',
        host: 'db4free.net',
        user: 'nomeserio',
        password: 'nomeserio',
        database: 'biling'
    })

}

module.exports = function () {
    //console.log('Função preparada pelo autoload');
    return connMysqlSync;
}