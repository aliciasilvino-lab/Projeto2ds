// 3. Classe Retângulo: Crie uma classe que modele um retângulo:
// A. Atributos: LadoA, LadoB (ou Comprimento e Largura, ou Base e Altura, a escolher)
// B. Métodos:
//  Mudar valor dos lados,
//  Retornar/apresentar valor dos lados,
//  Calcular Área,
//  Calcular Perímetro.

class Retangulo{
    ladoA:number;
    ladoB:number;
    constructor(ladoA:number,ladoB:number) {
        this.ladoA = ladoA;
        this.ladoB = ladoB;
    }
    mudarValorDosLados(novoLadoA:number,novoLadoB:number){
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
        return 2 *(this.ladoA + this.ladoB);
    }
}
let retangulo = new Retangulo(5, 10);
retangulo.retornarValorDosLados();
console.log("Área: " + retangulo.calcularArea());
console.log("Perímetro: " + retangulo.calcularPerimetro());
retangulo.mudarValorDosLados(8, 12);
console.log("Depois de mudar os lados:");
retangulo.retornarValorDosLados();
console.log("Nova área: " + retangulo.calcularArea());
console.log("Novo perímetro: " + retangulo.calcularPerimetro());
