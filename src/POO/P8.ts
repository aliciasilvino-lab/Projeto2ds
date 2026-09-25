// 8.Uma empresa precisa de um sistema simples para cadastrar seus funcionários. O sistema deve solicitar ao usuário o nome, 
// o cargo e o salário de vários funcionários. Para cada funcionário cadastrado, deve ser criado um objeto que armazene essas informações. 
// Ao final, o sistema deve exibir um resumo de todos os funcionários cadastrados, utilizando um método da classe.

export function questao8poo():void{
    class funcionario{
        nome:string
        cargo:string
        salario:number
        constructor(nome:string,cargo:string,salario:number){
            this.nome=nome
            this.cargo=cargo
            this.salario=salario
        }
        resumo(){
            return "nome: "+this.nome+" | cargo: "+this.cargo+" | salario: R$"+this.salario
        }
    }
    let funcionarios:funcionario[]=[]
    while(true){
        let nome=prompt("digite o nome ou sair para parar: ")
        if(nome=="sair")break
        let cargo=prompt("digite o cargo: ")||""
        let salario=Number(prompt("digite o salario: "))
        funcionarios.push(new funcionario(nome||"",cargo,salario))
    }
    let resultado=""
   for(let i=0;i<funcionarios.length;i++){
    resultado+=funcionarios[i].resumo()+"\n"
}
    alert(resultado)
}