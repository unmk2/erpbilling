var app = require('../config/server');


// Start The HTTP Server
app.listen(config.server.port, config.server.host, function () {
    console.log('Servidor OK');
    console.log('Servidor: ' + config.server.host + ' Porta: ' + config.server.port);
});