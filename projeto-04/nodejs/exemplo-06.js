/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Simular acesso com RFID usando página web com NodeJS
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
//var SerialPort = serialport.SerialPort;

// abre a porta de comunicação
var port = new SerialPort('/dev/ttyACM0', {
	baudRate: 9600
});

const parser = port.pipe(new Readline({delimiter: '\r\n'}))
// lê o conteúdo da porta serial
parser.on('data', console.log);