// 39. Processador de Pedidos de Restaurante (Drive-Thru)
// Para agilizar o atendimento de um Drive-Thru, crie um modelo de pedidos. A classe abstrata Pedido
// possui o número do pedido e o valor base dos itens privados, além do método abstrato
// calcularTotal(): number. O PedidoLocal adiciona uma taxa de serviço de 10%. O
// PedidoDriveThru adiciona uma taxa fixa de embalagem especial de R$ 3,00. O sistema interativo
// deve perguntar repetidamente ao caixa os dados dos pedidos atendidos. A cada pedido inserido, o
// programa invoca o cálculo total e acumula o valor em uma variável de faturamento bruto, exibindo na
// tela o resumo do pedido recém-calculado até que o usuário opte por fechar o caixa.

export function questao39poo():void{
    abstract class pedido{
        private _numeroPedido:number
        private _valorBase:number
        constructor(numeroPedido:number,valorBase:number){
            this._numeroPedido=numeroPedido
            this._valorBase=valorBase
        }
        public get numeroPedido(){
            return this._numeroPedido
        }
        public get valorBase(){
            return this._valorBase
        }
        public abstract calcularTotal():number
        public mostrarPedido(){
            console.log("numero do pedido: "+this._numeroPedido)
            console.log("valor base: R$ "+this._valorBase)
            console.log("valor total: R$ "+this.calcularTotal())
            console.log("-------------------------")
        }
    }
    class pedidoLocal extends pedido{
        constructor(numeroPedido:number,valorBase:number){
            super(numeroPedido,valorBase)
        }
        public calcularTotal(){
            return this.valorBase*1.1
        }
    }
    class pedidoDriveThru extends pedido{
        constructor(numeroPedido:number,valorBase:number){
            super(numeroPedido,valorBase)
        }
        public calcularTotal(){
            return this.valorBase+3
        }
    }
    let pedidos:pedido[]=[]
    let faturamentoBruto=0
    while(true){
        let tipo=prompt("o pedido e local ou drive-thru? (l/d)")||""
        let numeroPedido=Number(prompt("digite o numero do pedido: "))
        let valorBase=Number(prompt("digite o valor base dos itens: "))
        let novoPedido:pedido
        if(tipo.toLowerCase()=="l"){
            novoPedido=new pedidoLocal(numeroPedido,valorBase)
        }else{
            novoPedido=new pedidoDriveThru(numeroPedido,valorBase)
        }
        pedidos.push(novoPedido)
        faturamentoBruto+=novoPedido.calcularTotal()
        console.log("RESUMO DO PEDIDO:")
        novoPedido.mostrarPedido()
        let continuar=prompt("deseja cadastrar outro pedido? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    console.log("FATURAMENTO BRUTO: R$ "+faturamentoBruto)
}