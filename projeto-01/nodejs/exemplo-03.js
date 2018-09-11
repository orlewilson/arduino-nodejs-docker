/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Ligar e desligar um LED ajustando brilho com NodeJS
*/

// bibliotecas
// para acessar placa arduino
var five = require("johnny-five");  

// indica a porta onde está conectada a placa Arduino
//var board = new five.Board({port: "COM5"}); // manual
var board = new five.Board(); // automático

// variável para armazenar o valor atual do brilho
var light = 0;

//
board.on("ready", function() {  
	console.log("Arduino Ready!");  
	
   	  // indica a porta
   	this.pinMode(11, five.Pin.PWM);
  	
   	// a cada 500ms ajusta o brilho do LED
  	setInterval(() => {
  		if (light > 255) {
  			light = 0;
  		}
  		light += 10;
  		this.analogWrite(11, light);
  		console.log(light);
	}, 500);
}); 