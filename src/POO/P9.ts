// 9. Uma loja deseja controlar seu estoque de produtos. O sistema deve pedir ao usuário o nome do produto, o preço e a quantidade em estoque. 
// Cada produto deve ser representado por um objeto. Crie um método que calcule o valor total 
// em estoque (preço × quantidade) e exiba essa informação para cada produto.

export function questao9poo():void{
    class produto{
        nome:string
        preco:number
        quantidade:number
        constructor(nome:string,preco:number,quantidade:number){
            this.nome=nome
            this.preco=preco
            this.quantidade=quantidade
        }
        total(){
            return this.preco*this.quantidade
        }
    }
    let produtos:produto[]=[]
    while(true){
        let nome=prompt("digite o nome do produto ou sair para parar: ")
        if(nome=="sair")break
        let preco=Number(prompt("digite o preco: "))
        let quantidade=Number(prompt("digite a quantidade: "))
        produtos.push(new produto(nome||"",preco,quantidade))
    }
    let resultado=""
    for(let i=0;i<produtos.length;i++){
        resultado+="produto: "+produtos[i].nome+"\n"
        resultado+="valor em estoque: R$"+produtos[i].total()+"\n\n"
    }
    alert(resultado)
}