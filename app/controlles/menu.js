/**
 * Autor: Guilherme Kaercher
 * @param {*} app 
 * @param {*} req 
 * @param {*} res 
 */

module.exports.menu = (app, req, res) => {
    /** verifica se tem uma session iniciada */
    if (req.session.autorizado) {

    } else {
        /** se não tiver uma session ativa redireciona para o login */
        res.redirect('/');
    }
    var fs = require('fs');
    var path = 'public/menu/';
    var conn = app.config.dbSyncSql();

    // Aqui executamos uma consulta SQL e verificamos a tabela do login qual e o idioma

    var linhas_login = conn.queueQuery(`SELECT * FROM login WHERE id = '${req.session.login}'`)();
    var lang = linhas_login[0].lang;
    //const lang = 'pt-br';

    //console.log('lang : ' + lang);

    var files = fs.readdirSync(path);
    //console.log('files: ' + files);

    const obj = [];
    files.forEach(file => {

        //console.log('obj: ' + obj);
        var results = JSON.parse(fs.readFileSync(path + file, 'utf8'));
        //console.log(results);

        //Aqui fazemos a verificação da liguagem e mostramos o menu de acordo com o idioma do cliente
        if (results.lang == lang) {
            results.sub = results.menu.menu_sub;
            obj.push(results);
        }
    });
    return obj;

}
