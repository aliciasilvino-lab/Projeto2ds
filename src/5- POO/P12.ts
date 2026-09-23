// 12. Uma locadora quer controlar os carros disponíveis. O sistema deve solicitar o modelo do carro, o
// valor da diária e a quantidade de dias que o cliente deseja alugar. Crie um método que calcule o valor
// total do aluguel e exiba o resumo da locação. Por fim, o sistema deve perguntar se deseja fazer uma
// nova locação.

export function questao12poo():void{
    class carro{
        modelo:string
        diaria:number
        dias:number
        constructor(modelo:string,diaria:number,dias:number){
            this.modelo=modelo
            this.diaria=diaria
            this.dias=dias
        }
        total(){
            return this.diaria*this.dias
        }
        resumo(){
            return "modelo: "+this.modelo+"\nvalor da diaria: R$"+this.diaria+
            "\ndias: "+this.dias+"\nvalor total: R$"+this.total()
        }
    }
    while(true){
        let modelo=prompt("digite o modelo do carro: ")||""
        let diaria=Number(prompt("digite o valor da diaria: "))
        let dias=Number(prompt("digite quantos dias: "))
        let carro1=new carro(modelo,diaria,dias)
        alert(carro1.resumo())
        let continuar=prompt("deseja fazer uma nova locacao? sim/nao")
        if(continuar!="sim")break
    }
}