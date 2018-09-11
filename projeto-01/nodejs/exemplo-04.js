/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Ligar e desligar um LED usando página web com NodeJS
*/

// bibliotecas
// para trabalhar com páginas web
var app = require('express')();

//  para transferir dados por meio do protocolo HTTP
var server = require('http').Server(app);

// para criar conexão socket
var io = require('socket.io')(server);

// para acessar placa arduino
var five = require("johnny-five");  

// indica a porta onde está conectada a placa Arduino
//var board = new five.Board({port: "COM5"}); // manual
var board = new five.Board(); // automático
 
// quando a placa estiver pronta, execute.
board.on("ready", function() {  
   
  // servidor escutando na porta 8080
  server.listen(8080);

  // mensagem no console
  console.log('Servidor rodando em http://localhost:8080/');

  // informando que utilizará Led e qual porta
  var led = new five.Led(11);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/exemplo-04-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('ligar', function (data) {
      // ligar LED
      led.on();

      // enviar resposta ao solicitante que o LED foi ligado
      socket.emit('respostaLed', 'ligado');
    });

    // quando for solicitado para desligar o LED
    socket.on('desligar', function (data) {
      // desligar LED
      led.off();

      // enviar resposta ao solicitante que o LED foi desligado
      socket.emit('respostaLed', 'desligado');
    });
  });
}); 