// 23. Cadastro de Produtos de um Supermercado com Desconto Progressivo
// Um mercado de atacado precisa atualizar os preços de suas mercadorias nas prateleiras. Todo produto
// possui código, nome e preço de custo ocultados do acesso externo direto. Os Produtos Perecíveis
// possuem uma data de validade e recebem um desconto de 30% caso estejam no dia do vencimento. Os
// Produtos Não Perecíveis não sofrem alteração de valor. O sistema deve interagir com o gerente para
// listar os produtos do estoque. Após preencher o estoque (array), o programa deve rodar um loop que
// simula a passagem do caixa, aplicando as regras de desconto conforme o tipo do produto e exibindo o
// valor final que o cliente pagará.


export function questao23poo():void{
    class produto{
        private _codigo:string
        private _nome:string
        private _precoCusto:number
        constructor(codigo:string,nome:string,precoCusto:number){
            this._codigo=codigo
            this._nome=nome
            this._precoCusto=precoCusto
        }
        public get codigo(){
            return this._codigo
        }
        public get nome(){
            return this._nome
        }
        public get precoCusto(){
            return this._precoCusto
        }
        public calcularPreco(){
            return this._precoCusto
        }
        public mostrarProduto(){
            console.log("codigo: "+this._codigo)
            console.log("nome: "+this._nome)
            console.log("preco: R$ "+this.calcularPreco())
            console.log("-------------------------")
        }
    }
    class perecivel extends produto{
        private _dataValidade:string
        constructor(codigo:string,nome:string,precoCusto:number,dataValidade:string){
            super(codigo,nome,precoCusto)
            this._dataValidade=dataValidade
        }
        public calcularPreco(){
            let hoje=new Date().toLocaleDateString("pt-BR")
            if(this._dataValidade==hoje){
                return this.precoCusto*0.7
            }
            return this.precoCusto
        }
        public mostrarProduto(){
            console.log("codigo: "+this.codigo)
            console.log("nome: "+this.nome)
            console.log("data de validade: "+this._dataValidade)
            console.log("preco final: R$ "+this.calcularPreco())
            console.log("-------------------------")
        }
    }
    class naoPerecivel extends produto{
        constructor(codigo:string,nome:string,precoCusto:number){
            super(codigo,nome,precoCusto)
        }

        public calcularPreco(){
            return this.precoCusto
        }
    }
    let produtos:produto[]=[]
    for(let i=0;i<15;i++){
        let tipo=prompt("o produto e perecivel ou nao perecivel? (p/n)")||""
        let codigo=prompt("digite o codigo do produto: ")||""
        let nome=prompt("digite o nome do produto: ")||""
        let precoCusto=Number(prompt("digite o preco de custo: "))

        if(tipo.toLowerCase()=="p"){
            let dataValidade=prompt("digite a data de validade (dd/mm/aaaa): ")||""
            let novoProduto=new perecivel(codigo,nome,precoCusto,dataValidade)
            produtos.push(novoProduto)
        }else{
            let novoProduto=new naoPerecivel(codigo,nome,precoCusto)
            produtos.push(novoProduto)
        }

        let continuar=prompt("deseja cadastrar outro produto? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    console.log("PRODUTOS DO ESTOQUE:")
    for(let i=0;i<produtos.length;i++){
        produtos[i].mostrarProduto()
    }
    console.log("VALOR FINAL NO CAIXA:")
    for(let i=0;i<produtos.length;i++){
        console.log(produtos[i].nome+": R$ "+produtos[i].calcularPreco())
    }
    
}