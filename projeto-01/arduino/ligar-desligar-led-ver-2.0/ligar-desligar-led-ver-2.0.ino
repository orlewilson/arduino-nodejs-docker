/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Ligar e desligar um LED usando suas próprias funções
*/

// Porta digital no qual sera colocado um LED para ser ligado e desligado
int led = 11;

// Função para ligar LED
void ligarLED(){
  // Funcao do Arduino para ligar o LED (colocar nivel alto, ou seja, 5V)
  digitalWrite(led, HIGH);
}

// Função para ligar LED
void desligarLED(){
  // Funcao do Arduino para desligar o LED (colocar nivel baixo, ou seja, 0V)  
  digitalWrite(led, LOW);
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

  ligarLED();
  
  atraso(1);

  desligarLED();

  atraso(1);
}
