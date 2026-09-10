// 4. Crie um programa que utilize a classe acima. Ele deve pedir ao usuário que informe as medidas de um
// local. Depois, deve criar um objeto com as medidas e calcular a quantidade de pisos e de rodapés
// necessárias para o local.

class Retangulo{
    ladoA:number;
    ladoB:number;
    constructor(ladoA:number,ladoB:number){
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    }
    mudarValorDosLados(novoLadoA:number,novoLadoB:number) {
        this.ladoA = novoLadoA;
        this.ladoB = novoLadoB;
    }
    retornarValorDosLados(){
        console.log("Lado A: " + this.ladoA);
        console.log("Lado B: " + this.ladoB);
    }
    calcularArea(){
        return this.ladoA * this.ladoB;
    }
    calcularPerimetro(){
        return 2 * (this.ladoA + this.ladoB);
    }
}
let comprimento = Number(prompt("Digite o comprimento do local:"));
let largura = Number(prompt("Digite a largura do local:"));
let local = new Retangulo(comprimento, largura);
let tamanhoPiso = Number(prompt("Digite o tamanho do piso em metros quadrados:"));
let quantidadePisos = local.calcularArea() / tamanhoPiso;
let tamanhoRodape = Number(prompt("Digite o tamanho de cada rodapé em metros:"));
let quantidadeRodapes = local.calcularPerimetro() / tamanhoRodape;
console.log("Área do local: " + local.calcularArea() + " m²");
console.log("Quantidade de pisos: " + Math.ceil(quantidadePisos));
console.log("Perímetro do local: " + local.calcularPerimetro() + " m");
console.log("Quantidade de rodapés: " + Math.ceil(quantidadeRodapes));
