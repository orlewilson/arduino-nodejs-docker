/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Hello World em NodeJS
*/

// bibliotecas
var http = require('http');

// criando um servidor
http.createServer(function (req, res){
	res.writeHead(200, {'Content-Type' : 'text/plain'});
	res.end('Hello World!');
}).listen(8080);

// mostra mensagem no console
console.log("Servidor rodando em http://localhost/8080");