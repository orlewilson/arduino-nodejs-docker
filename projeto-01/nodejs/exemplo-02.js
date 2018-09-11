/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Ligar e desligar um LED com NodeJS
*/

// bibliotecas
// para acessar placa arduino
var five = require("johnny-five");  

//var board = new five.Board({port: "COM5"});
var board = new five.Board();

// funcao principal (equivalente ao loop do arduino)
board.on("ready", function() {  
   console.log("Arduino Ready!");

   // indica a porta
   var led = new five.Led(11);  

   // função ligar/desligar led
   led.blink(1000);  
}); 