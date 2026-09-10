// 5. Classe Pessoa: Crie uma classe que modele uma pessoa:
// 1. Atributos: nome, idade, peso e altura
// 2. Métodos: Envelhecer, engordar, emagrecer, crescer.
// Obs: Por padrão, a cada ano que nossa pessoa envelhece, sendo a idade dela menor que 21 anos,
// ela deve crescer 0,5 cm.

class Pessoa{
    nome:string;
    idade:number;
    peso:number;
    altura:number;
    constructor(nome:string,idade:number,peso:number,altura:number){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }
    envelhecer(){
        this.idade++;
        if (this.idade < 21){
            this.altura = this.altura + 0.5;
        }
    }
    engordar(peso:number){
        this.peso = this.peso + peso;
    }
    emagrecer(peso:number){
        this.peso = this.peso - peso;
    }
    crescer(altura:number){
        this.altura = this.altura + altura;
    }
}
let pessoa = new Pessoa("João", 18, 70, 170);
console.log("Nome: " + pessoa.nome);
console.log("Idade: " + pessoa.idade);
console.log("Peso: " + pessoa.peso + " kg");
console.log("Altura: " + pessoa.altura + " cm");
pessoa.envelhecer();
console.log("Depois de envelhecer:");
console.log("Idade: " + pessoa.idade);
console.log("Altura: " + pessoa.altura + " cm");
pessoa.engordar(2);
console.log("Peso depois de engordar: " + pessoa.peso + " kg");
pessoa.emagrecer(1);
console.log("Peso depois de emagrecer: " + pessoa.peso + " kg");
pessoa.crescer(2);
console.log("Altura depois de crescer: " + pessoa.altura + " cm");
