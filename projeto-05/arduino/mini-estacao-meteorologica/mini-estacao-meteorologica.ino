/*
  Como Criar Coisas Inteligentes com Arduino, NodeJS e Docker - Boa Vista (RR)
  Facilitador:        Prof. Orlewilson Bentes Maia
  Autor:              Seu nome
  Data Criacao:       15/09/2018
  Descricao:          Criar mini estação meteorológica
*/
// Inclui a biblioteca DHT
#include "DHT.h" 

// Porta na qual lerá os valores do sensor DHT
int dthPorta = A0;

// Cria um objeto da classe dht
DHT dht(dthPorta, DHT11); 

// variáveis que armazenarão os valores lidos do sensor DHT
float valorTemp;
float valorUmidade;

// Função para atrasar em n segundos
void atraso (int n){

   // Funcao do Arduino para parar durante um certo tempo em milisegundos (ms)
  delay(1000 * n); // atraso em n segundos
  
}

// Função para mostrar valores lidos dos sensores no LCD
void mostrarValores(float temperatura, float umidade){
  
  Serial.println("Temperatura: " + String(temperatura));
  Serial.println();
  Serial.println("Umidade: " + String(umidade));
  Serial.println();
}

void setup(){

  // inicia a porta serial
  Serial.begin(9600);

  Serial.println("Lendo valores");
  Serial.println();
}
 
void loop(){
  // ler os valores dos sensores
  valorUmidade = dht.readHumidity();
  valorTemp = dht.readTemperature();

  // mostra os valores no LCD
  mostrarValores(valorTemp, valorUmidade);

  atraso(1);
}
