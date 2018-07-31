module.exports.menu = (app,req,res)=>{ 
    var fs = require('fs');
    var patch = 'public/menu';
    var conn = app.config.dbSyncSql();


    fs.readdir(patch, (err, files) => {
        /**
         * Aqui executamos uma consulta SQL e verificamos a tabela do login qual e o idioma
         */
        var linhas_login = conn.queueQuery(`SELECT * FROM login WHERE id = '1'`)();
        var lang = linhas_login[0].lang;

        /**
         * Criamos um loop com os arquivos emcontrados no parametro fs.readdir 
         * abrimos cada arquivo separadamente e colocamos o seu conteudo em um objeto
         */
        //const reload = () => {
            const obj = [];
            files.forEach(file => {

                var results = JSON.parse(fs.readFileSync(patch + '/' + file, 'utf8'));
                // console.log(results.lang);
                // console.log(lang);

                /**
                 * Aqui fazemos a verificação da liguagem e mostramos o menu de acordo com o idioma do cliente
                 */
                if (results.lang == lang) {
                    results.sub = results.menu.menu_sub;
                    obj.push(results);
                }
            });
            //const resposta = await obj;
            retorno(obj);
            //console.log(obj);
            //return obj;
        //}
        //console.log(reload());
        //const result = reload();
        //console.log(result);

    });

    function retorno(x){
        //console.log(x);
        st = this.x;

    }
    console.log(st);
    return st;
    //console.log(retorno());
      
}
