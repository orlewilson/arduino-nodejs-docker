/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Ligar e desligar um LED ajustando a intensidade do brilho por meio da programação
*/

// Porta digital no qual sera colocado um LED para ser ligado e desligado
int led = 11;

// Função para ligar LED
void ligarLED(int brilho){
  // Funcao do Arduino para ligar o LED ajustando o brilho
  analogWrite(led, brilho);
}

// Função para atrasar em n segundos
void atraso (int n){

   // Funcao do Arduino para parar durante um certo tempo em milisegundos (ms)
  delay(1000 * n); // atraso em n segundos
  
}

// Funcao para configurar o Arduino
void setup() {                

  // Indica qual porta digital sera utilizada como saida (ligar/desligar um LED)
  pinMode(led, OUTPUT);     
}

// Funcao principal do Arduino que ficara em loop infinito
void loop() {

  ligarLED(0);
  
  atraso(1);

  ligarLED(50);

  atraso(1);

  ligarLED(100);

  atraso(1);

  ligarLED(150);

  atraso(1);

  ligarLED(200);

  atraso(1);

  ligarLED(255);

  atraso(1);
}
