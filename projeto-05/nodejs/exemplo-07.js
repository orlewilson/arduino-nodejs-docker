/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Criar mini estação meteorológica
*/

// bibliotecas
// para trabalhar com páginas web
var app = require('express')();

//  para transferir dados por meio do protocolo HTTP
var server = require('http').Server(app);

// para criar conexão socket
var io = require('socket.io')(server);

// para acesso serial a placa Arduino
var SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline')

// abre a porta de comunicação (windows)
//var port = new SerialPort('COM14', {
//  baudRate: 9600
//});

// abre a porta de comunicação (linux)
var port = new SerialPort('/dev/ttyACM0', {
  baudRate: 9600
});

const parser = port.pipe(new Readline({delimiter: '\r\n'}))

// servidor escutando na porta 8080
server.listen(8080);

// mensagem no console
console.log('Servidor rodando em http://localhost:8080/');

// informando a página HTML que será vista pelo usuário

var express = require("express");

var router = express.Router();

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

app.use("/",router);

app.use(express.static(__dirname + '/views/'));


// quando alguém conectar com o servidor por meio de socket
io.on('connection', function (socket) {
    
  // lê o conteúdo da porta serial
  parser.on('data', function (data) {
      console.log(data);
      // enviar resposta da leitura do cartão para a página web
      socket.emit('respostaTemp', data);
      socket.emit('respostaUmi', data);
  });
});