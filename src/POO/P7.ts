// 7.Uma empresa quer cadastrar funcionários e aplicar aumento salarial. O sistema deve pedir nome, cargo e salário. 
// Crie um método que receba um percentual de aumento e atualize o salário do funcionário, exibindo o seu nome e novo valor.

export function questao7poo():void{
    class funcionario{
        nome:string
        cargo:string
        salario:number
        constructor(nome:string,cargo:string,salario:number){
            this.nome=nome
            this.cargo=cargo
            this.salario=salario
        }
        aumento(percentual:number){
            this.salario+=this.salario*(percentual/100)
        }
    }
    let nome=prompt("digite o nome: ")||""
    let cargo=prompt("digite o cargo: ")||""
    let salario=Number(prompt("digite o salario: "))
    let funcionario1=new funcionario(nome,cargo,salario)
    let percentual=Number(prompt("digite o percentual de aumento: "))
    funcionario1.aumento(percentual)
    alert("nome: "+funcionario1.nome+"\nnovo salario: "+funcionario1.salario)
}