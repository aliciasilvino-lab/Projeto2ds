// 11. Uma lanchonete quer registrar pedidos dos clientes. O sistema deve solicitar o nome do cliente, o
// nome do pedido e o valor. Crie um método que exiba o resumo do pedido e o valor total.

export function questao11poo():void{
    class pedido{
        cliente:string
        nome:string
        valor:number
        constructor(cliente:string,nome:string,valor:number){
            this.cliente=cliente
            this.nome=nome
            this.valor=valor
        }
        resumo(){
            return "===cliente: "+this.cliente+"==="+"\n- pedido: "+this.nome+"\n-valor total: R$"+this.valor
        }
    }
    let cliente=prompt("digite o nome do cliente: ")||""
    let nome=prompt("digite o nome do pedido: ")||""
    let valor=Number(prompt("digite o valor: "))
    let pedido1=new pedido(cliente,nome,valor)
    alert(pedido1.resumo())
}