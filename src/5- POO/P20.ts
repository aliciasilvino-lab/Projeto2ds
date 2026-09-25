// 20. Gestão de Pedidos de uma Pizzaria Local
// Para modernizar o atendimento de uma pizzaria, crie um sistema de pedidos. Um pedido base tem o
// número da mesa e o valor dos ingredientes. O Pedido de Entrega (Delivery) herda as propriedades do
// pedido base, mas precisa incluir uma taxa de entrega protegida e o endereço de destino. O software
// deve interagir com o atendente perguntando os detalhes de cada pedido feito na noite. Conforme os
// pedidos são criados, eles entram em um array de controle. Ao fechar o caixa, o sistema percorre a lista
// de pedidos, calcula os valores finais de cada um (aplicando as taxas quando necessário) e exibe o
// faturamento total do estabelecimento.

export function questao20poo(): void{
    class pedido{
        private _numeroMesa:number
        private _valorIngredientes:number
        constructor(numeroMesa:number,valorIngredientes:number){
            this._numeroMesa=numeroMesa
            this._valorIngredientes=valorIngredientes
        }
        public get numeroMesa(){
            return this._numeroMesa
        }
        public get valorIngredientes(){
            return this._valorIngredientes
        }
        public calcularValor(){
            return this._valorIngredientes
        }
        public mostrarPedido(){
            console.log("numero da mesa: "+this._numeroMesa)
            console.log("valor dos ingredientes: R$ "+this._valorIngredientes)
            console.log("-------------------------")
        }
    }
    class delivery extends pedido{
        protected _taxaEntrega:number
        private _endereco:string
        constructor(numeroMesa:number,valorIngredientes:number,taxaEntrega:number,endereco:string){
            super(numeroMesa,valorIngredientes)
            this._taxaEntrega=taxaEntrega
            this._endereco=endereco
        }
        public get endereco(){
            return this._endereco
        }
        public calcularValor(){
            return this.valorIngredientes+this._taxaEntrega
        }
        public mostrarPedido(){
            console.log("numero da mesa: "+this.numeroMesa)
            console.log("valor dos ingredientes: R$ "+this.valorIngredientes)
            console.log("taxa de entrega: R$ "+this._taxaEntrega)
            console.log("endereco: "+this._endereco)
            console.log("valor final: R$ "+this.calcularValor())
            console.log("-------------------------")
        }
    }
    let pedidos:pedido[]=[]
    for(let i=0;i<15;i++){
        let tipo=prompt("o pedido e local ou delivery? (l/d)")||""
        let numeroMesa=Number(prompt("digite o numero da mesa: "))
        let valorIngredientes=Number(prompt("digite o valor dos ingredientes: "))
        if(tipo.toLowerCase()=="d"){
            let taxaEntrega=Number(prompt("digite a taxa de entrega: "))
            let endereco=prompt("digite o endereco de entrega: ")||""
            let novoPedido=new delivery(numeroMesa,valorIngredientes,taxaEntrega,endereco)
            pedidos.push(novoPedido)
        }else{
            let novoPedido=new pedido(numeroMesa,valorIngredientes)
            pedidos.push(novoPedido)
        }
        let continuar=prompt("deseja cadastrar outro pedido? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    let faturamentoTotal=0
    console.log("PEDIDOS:")
    for(let i=0;i<pedidos.length;i++){
        pedidos[i].mostrarPedido()
        faturamentoTotal+=pedidos[i].calcularValor()
    }
    console.log("FATURAMENTO TOTAL: R$ "+faturamentoTotal)
}