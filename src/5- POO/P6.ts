// 6. Classe Conta Corrente: Crie uma classe para implementar uma conta corrente. A classe deve possuir os seguintes 
// atributos: número da conta, nome do correntista esaldo. 
// Os métodos são os seguintes: alterarNome, depósito e saque. 
// No construtor, saldo é opcional, com valor default zero e os demais atributos são obrigatórios. 
// Por fim, faça com que esse sistema interaja com o usuário permitido que ele, depois de cadastrar as suas informações, possa usar os métodos disponíveis.

export function questao6poo():void{
    class contaCorrente{
        numero:number
        nome:string
        saldo:number
        constructor(numero:number,nome:string,saldo:number=0){
            this.numero=numero
            this.nome=nome
            this.saldo=saldo
        }
        alterarNome(novoNome:string){this.nome=novoNome}
        deposito(valor:number){this.saldo+=valor}
        saque(valor:number){
            if(valor<=this.saldo)this.saldo-=valor
            else alert("saldo insuficiente")
        }
    }
    let numero=Number(prompt("digite o numero da conta: "));
    let nome=prompt("digite seu nome: ")||""
    let conta=new contaCorrente(numero,nome)
    while(true){
        let opcao=prompt("1 - alterar nome\n2 - deposito\n3 - saque\n4 - ver conta\n5 - sair")
        if(opcao=="1")conta.alterarNome(prompt("digite o novo nome: ")||"")
        else if(opcao=="2")conta.deposito(Number(prompt("digite o valor: ")))
        else if(opcao=="3")conta.saque(Number(prompt("digite o valor: ")))
        else if(opcao=="4")alert("nome: "+conta.nome+"| saldo: "+conta.saldo)
        else if(opcao=="5")break
    }
}
