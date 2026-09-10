// 1. Classe Bola: Crie uma classe que modele uma bola:
//  Atributos: Cor, circunferência, material
//  Métodos: trocaCor e mostraCor

export function questao1poo(){
class Bola{
    cor:string;
    circunferencia:number;
    material:string;
    constructor(cor:string,circunferencia:number,material:string){
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }
    trocaCor(novaCor:string){
        this.cor = novaCor;
    }
    mostraCor(){
        console.log("A cor da bola é: " + this.cor);
    }
}
let bola = new Bola("Azul", 30, "Borracha");
bola.mostraCor();
bola.trocaCor("Vermelha");
bola.mostraCor();
}