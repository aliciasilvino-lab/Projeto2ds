// 10. Classe Bichinho Virtual: Crie uma classe que modele um Tamagushi (Bichinho Eletrônico) com as seguintes regras:
// A. Atributos: Nome, Fome, Saúde e Idade 
// B. Métodos: Alterar Nome, Fome, Saúde e Idade; 
// C. Retornar Nome, Fome, Saúde e Idade 
// Obs: Existe mais uma informação que devemos levar em consideração, o Humor do nosso tamagushi, este humor é uma combinação entre 
// os atributos Fome e Saúde, ou seja, um campo calculado, então não devemos criar um atributo para armazenar esta informação por que 
// ela pode ser calculada a qualquer momento.
// Cálculo do Humor (Campo Calculado): O humor não deve ser um atributo salvo no construtor. 
// Ele deve ser um método getter público 
// (get humor()) que calcula a média ponderada ou simples da felicidade do bichinho.
// Fórmula do Humor: (Saúde + (10 - Fome)) / 2
// Regra de Negócio do Humor:
// Média entre 8.0 e 10.0 🡪 "Muito Feliz "
// Média entre 5.0 e 7.9 🡪 "Neutro / Ok "
// Média abaixo de 5.0 🡪 "Triste / Transtornado"


export function questao10poo():void{
    class bichinho{
        nome:string
        fome:number
        saude:number
        idade:number
        constructor(nome:string,fome:number,saude:number,idade:number){
            this.nome=nome
            this.fome=fome
            this.saude=saude
            this.idade=idade
        }
        alterarNome(nome:string){
            this.nome=nome}
        alterarFome(fome:number){
            this.fome=fome}
        alterarSaude(saude:number){
            this.saude=saude}
        alterarIdade(idade:number){
            this.idade=idade}
        get humor(){
            let media=(this.saude+(10-this.fome))/2
            if(media>=8){
                return "muito feliz"
            }
            else if(media>=5){
                return "neutro / ok"
            }
            else{
             return "triste / transtornado"
            }
        }
    }
    let nome=prompt("digite o nome: ")||""
    let fome=Number(prompt("digite a fome: "))
    let saude=Number(prompt("digite a saude: "))
    let idade=Number(prompt("digite a idade: "))
    let bichinho1=new bichinho(nome,fome,saude,idade)
    alert("nome: "+bichinho1.nome+
    "\nfome: "+bichinho1.fome+
    "\nsaude: "+bichinho1.saude+
    "\nidade: "+bichinho1.idade+
    "\nhumor: "+bichinho1.humor)
}
