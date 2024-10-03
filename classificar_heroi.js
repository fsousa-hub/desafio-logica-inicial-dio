/* 
Desafio Classificador de nível de Herói

O que devo utilizar:
- variáveis, operadores, laços de repetição e estruturas de dicisões

Objetivo:
- criar varável p/ armazenar: nome e a quantidade de experiência (XP)
- utilizar estrutura de decisão p/ classificar herói c/ base no XP

Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

Saída:
Exibir mensagem: 
"O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

// Variáveis
let nome = "Thor";
let experiencia = 8500;

// Variável p/ armazenar o nível do herói
let nivel;

// Estrutura de decisão p/ classificar o nível do herói c/ base no XP
if (experiencia < 1000) {
    nivel = "Ferro";
} else if ((experiencia >= 1001) && (experiencia <= 2000)) {
    nivel = "Bronze";
} else if ((experiencia >= 2001 ) && (experiencia <= 5000)) {
   nivel = "Prata";
} else if ((experiencia >= 5001) && (experiencia <= 7000)) {
    nivel = "Ouro";
}else if ((experiencia >= 7001) && (experiencia <= 8000)) {
    nivel = "Platina";
} else if ((experiencia >= 8001) && (experiencia <= 9000)) {
    nivel = "Ascendente";
} else if ((experiencia >= 9001) && (experiencia <= 10000)) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

// Saída da mensagem 
console.log("O Herói de nome " + nome + " está no nível de " + nivel );
    
