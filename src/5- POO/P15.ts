// 15. Uma empresa possui dois tipos de funcionários: horistas (pagos por hora trabalhada) e assalariados
// (salário fixo mensal). Crie uma hierarquia de classes com Funcionário como superclasse e
// FuncionarioHorista e FuncionarioAssalariado como subclasses. O programa deve solicitar os dados via
// teclado e calcular o salário de cada um.

export function questao15poo():void{
    class funcionario{
        nome:string
        constructor(nome:string){
            this.nome=nome
        }
        salario(){
            return 0
        }
    }
    class funcionarioHorista extends funcionario{
        horas:number
        valorHora:number
        constructor(nome:string,horas:number,valorHora:number){
            super(nome)
            this.horas=horas
            this.valorHora=valorHora
        }
        salario(){
            return this.horas*this.valorHora
        }
    }
    class funcionarioAssalariado extends funcionario{
        salarioFixo:number
        constructor(nome:string,salarioFixo:number){
            super(nome)
            this.salarioFixo=salarioFixo
        }
        salario(){
            return this.salarioFixo
        }
    }
    let nome=prompt("digite o nome: ")||""
    let tipo=prompt("1 - horista\n2 - assalariado")
    if(tipo=="1"){
        let horas=Number(prompt("digite as horas trabalhadas: "))
        let valorHora=Number(prompt("digite o valor da hora: "))
        let funcionario1=new funcionarioHorista(nome,horas,valorHora)
        alert("nome: "+funcionario1.nome+"\nsalario: R$"+funcionario1.salario())
    }else{
        let salarioFixo=Number(prompt("digite o salario fixo: "))
        let funcionario1=new funcionarioAssalariado(nome,salarioFixo)
        alert("nome: "+funcionario1.nome+"\n|salario: R$"+funcionario1.salario())
    }
}