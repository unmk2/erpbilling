module.exports.CreateLogin = (app,login,senha,tempo,pedido) =>{

    var dados  = {username:login,attribute:'Password',op:'==',value:senha,pedido:pedido,enable:0};
    return app.app.model.create.ExeCreate(app,`radcheck`,dados);
}

module.exports.CreateTempo = (app, login, senha, tempo, pedido) => {

    var dados = { username: login, attribute: 'Max-All-Session', op: ':=', value: tempo, pedido: pedido, enable: 0 };
    return app.app.model.create.ExeCreate(app, `radcheck`, dados);
}