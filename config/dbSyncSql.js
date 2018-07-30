var MySql = require('sync-mysql');

var connMysqlSync = function () {
    //console.log('Conexão com bd foi estabelecida');

    return new MySql({
        //host      : '165.227.55.153',
        host: '192.168.88.8',
        user: 'root',
        password: '455ttte',
        database: 'billing'
    })

}

module.exports = function () {
    //console.log('Função preparada pelo autoload');
    return connMysqlSync;
}