module.exports = (app)=>{

    /**
     * Rota Principal
     */
    app.get('/',(req,res)=>{
        var conn = app.config.dbSyncSql();
        var fs = require('fs');
        var patch = 'public/menu';

        /**
         * Este Modulo carrega os arquivos json responsaveis por montar o menu do sistema  onde
         * @patch pasta onde fica os arquivos json
         */
        fs.readdir(patch, (err, files) => {
            /** verifica se tem uma session iniciada */
            if (req.session.autorizado) {
            /**
             * Aqui executamos uma consulta SQL e verificamos a tabela do login qual e o idioma
             */
            var linhas_login = conn.queueQuery(`SELECT * FROM login WHERE id = '${req.session.login}'`)();
            var lang = linhas_login[0].lang;            
            
            /**
             * Criamos um loop com os arquivos emcontrados no parametro fs.readdir 
             * abrimos cada arquivo separadamente e colocamos o seu conteudo em um objeto
             */
            var obj = [];
            files.forEach(file => {
                
                var results = JSON.parse(fs.readFileSync(patch + '/' + file, 'utf8'));
                // console.log(results.lang);
                // console.log(lang);

                /**
                 * Aqui fazemos a verificação da liguagem e mostramos o menu de acordo com o idioma do cliente
                 */
                if (results.lang == lang){
                    console.log(results.menu.menu_sub.bilhetes);
                    results.sub = results.menu.menu_sub;
                    obj.push(results);
                }
            });
                console.log(obj);
            //console.log(obj.menu);
                /**
                 * Passamos este objeto para a nossa viewl para que amesma possa montar o menu
                 */
                res.render('index',{menu:obj});
            }else{
                /** se não tiver uma session ativa redireciona para o login */
                res.render('login');
            }

        });

    });


    /**
     * Rota responsavel por destruir uma serrion ativa
     */
    app.get('/sair', (req, res) => {
        req.session.autorizado  = false;
        req.session.id          = null;
        req.session.login       = null;  
        res.redirect('/');
    });
};