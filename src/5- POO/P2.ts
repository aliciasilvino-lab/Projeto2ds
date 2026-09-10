// 2. Classe Quadrado: Crie uma classe que modele um quadrado:
//  Atributos: Tamanho do lado
//  Métodos: Mudar valor do Lado,
//  Retornar valor do Lado e calcular Área;

class Quadrado{
    tamanhoDoLado:number;
    constructor(tamanhoDoLado:number){
        this.tamanhoDoLado = tamanhoDoLado;
    }
    mudarValorDoLado(novoTamanho:number){
        this.tamanhoDoLado = novoTamanho;
    }
    retornarValorDoLado(){
        return this.tamanhoDoLado;
    }
    calcularArea(){
        return this.tamanhoDoLado * this.tamanhoDoLado;
    }
}
let quadrado = new Quadrado(5);

console.log("Tamanho do lado: " + quadrado.retornarValorDoLado());
console.log("Área do quadrado: " + quadrado.calcularArea());
quadrado.mudarValorDoLado(10);
console.log("Novo tamanho do lado: " + quadrado.retornarValorDoLado());
console.log("Nova área: " + quadrado.calcularArea());
