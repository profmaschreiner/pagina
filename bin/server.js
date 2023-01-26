/*let http = require('http');
let port = 8180;
let ip = '127.0.0.1';

//trabalhe com requisições
function handle_request(request, response){
    response.writeHead(200, {'Content-Type':'text/plain'});
    response.end('Olá Mundo\n');
    console.log('teste');
}

http.createServer(handle_request).listen(port, ip);
console.log("Inicio nodeJS")
*/
const app = require('../src/app');
const port = normalizaPort(process.env.port || 3001);

function normalizaPort(val){
    const port = parseInt(val,10);
    if (isNaN(port)){
        return val;
    }
    if(port >= 0){
        return port;
    }
    return false;

}

app.listen(port, function(){
    console.log("App rodando na porta "+port);
});