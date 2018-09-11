/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Ligar e desligar 3 LEDs usando página web com NodeJS
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
  var led1 = new five.Led(13);
  var led2 = new five.Led(12);
  var led3 = new five.Led(11);  

  // informando a página HTML que será vista pelo usuário
  app.get('/', function (req, res) {
    res.sendFile(__dirname + '/exemplo-05-web.html');
  });

  // quando alguém conectar com o servidor por meio de socket
  io.on('connection', function (socket) {
    
    // quando for solicitado para ligar o LED
    socket.on('ligar', function (data) {
      
      if (data == '1') {
        // ligar LED 1
        led1.on();
        // enviar resposta ao solicitante que o LED 1 foi ligado 
        socket.emit('respostaLed', 'ligado1');
      } else if (data == '2') {
        // ligar LED 2
        led2.on();  
        // enviar resposta ao solicitante que o LED 2 foi ligado 
        socket.emit('respostaLed', 'ligado2');
      } else if (data == '3') {
        // ligar LED 3
        led3.on();  
        
        // enviar resposta ao solicitante que o LED 3 foi ligado 
        socket.emit('respostaLed', 'ligado3');
      } 
    });

    // quando for solicitado para desligar o LED
    socket.on('desligar', function (data) {
      if (data == '1') {
        // desligar LED 1
        led1.off();
        // enviar resposta ao solicitante que o LED 1 foi desligado 
        socket.emit('respostaLed', 'desligado1');
      } else if (data == '2') {
        // desligar LED 2
        led2.off();  
        // enviar resposta ao solicitante que o LED 2 foi desligado 
        socket.emit('respostaLed', 'desligado2');
      } else if (data == '3') {
        // desligar LED 3
        led3.off();  
        
        // enviar resposta ao solicitante que o LED 3 foi desligado 
        socket.emit('respostaLed', 'desligado3');
      } 
    });
  });
}); 