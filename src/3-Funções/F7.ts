// 7. Sistema de Eficiência de Combustível
// Crie um programa que ajude um motorista a saber a autonomia do seu carro.
//  Função 1: Recebe a distância percorrida e a quantidade de combustível gasta, retornando
// o consumo médio (km/l).
//  Função 2: Recebe o consumo médio e a capacidade total do tanque, retornando quantos
// quilômetros o carro percorre com o tanque cheio.

function calcularConsumo(distancia: number, combustivel: number): number {
    return distancia / combustivel;
}

function calcularAutonomia(consumoMedio: number, capacidadeTanque: number): number {
    return consumoMedio * capacidadeTanque;
}

let distancia: number = 300; 
let combustivel: number = 25;    
let capacidadeTanque: number = 40; 

let consumoMedio = calcularConsumo(distancia, combustivel);
let autonomia = calcularAutonomia(consumoMedio, capacidadeTanque);

console.log(`Consumo médio: ${consumoMedio.toFixed(2)} km/l`);
console.log(`Autonomia com tanque cheio: ${autonomia.toFixed(2)} km`);