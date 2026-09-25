// 47. Sistema de Controle de Gastos Pessoais
// Para ajudar no planejamento financeiro, crie uma classe Despesa com os atributos privados
// descricao, categoria e valor. Crie métodos de leitura e escrita com validação para impedir valores
// menores ou iguais a zero no atributo valor. O programa deve solicitar repetidamente que o usuário
// insira suas despesas do mês. O sistema mantém uma variável acumuladora para somar o valor total
// das despesas inseridas e exibe o saldo devedor atualizado a cada nova entrada até que o usuário decida
// parar o preenchimento.

export function questao47poo():void{
    class despesa{
        private _descricao:string
        private _categoria:string
        private _valor:number
        constructor(descricao:string,categoria:string,valor:number){
            this._descricao=descricao
            this._categoria=categoria
            this._valor=valor
        }
        public get descricao(){
            return this._descricao
        }
        public get categoria(){
            return this._categoria
        }
        public get valor(){
            return this._valor
        }
        public set descricao(descricao:string){
            this._descricao=descricao
        }
        public set categoria(categoria:string){
            this._categoria=categoria
        }
        public set valor(valor:number){
            if(valor>0){
                this._valor=valor
            }
        }
        public mostrarDespesa(){
            console.log("descricao: "+this._descricao)
            console.log("categoria: "+this._categoria)
            console.log("valor: R$ "+this._valor)
            console.log("-------------------------")
        }
    }
    let despesas:despesa[]=[]
    let totalDespesas=0
    while(true){
        let descricao=prompt("digite a descricao da despesa: ")||""
        let categoria=prompt("digite a categoria da despesa: ")||""
        let valor=Number(prompt("digite o valor da despesa: "))
        if(valor<=0){
            console.log("valor invalido.")
        }else{
            let novaDespesa=new despesa(descricao,categoria,valor)
            despesas.push(novaDespesa)
            totalDespesas+=novaDespesa.valor
            console.log("SALDO DEVEDOR ATUALIZADO: R$ "+totalDespesas)
        }
        let continuar=prompt("deseja cadastrar outra despesa? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    console.log("TOTAL DE DESPESAS: R$ "+totalDespesas)
}