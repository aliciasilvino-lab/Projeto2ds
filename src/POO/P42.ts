// 42. Controle de Estoque de Farmácia
// Uma farmácia precisa monitorar a quantidade de remédios em seu estoque. Crie a classe
// Medicamento com os atributos privados nome, lote, preco e quantidadeEstoque. Crie getters e
// setters com validação no setter de quantidadeEstoque para não permitir valores negativos. O
// programa deve solicitar via teclado o cadastro de até 10 medicamentos e armazená-los em um array.
// Em seguida, utilize um laço para percorrer o array e exibir apenas os medicamentos que estão com
// estoque crítico (quantidade menor que 5 unidades), mostrando o nome e a quantidade restante de cada
// um.

export function questao42poo():void{
    class medicamento{
        private _nome:string
        private _lote:string
        private _preco:number
        private _quantidadeEstoque:number
        constructor(nome:string,lote:string,preco:number,quantidadeEstoque:number){
            this._nome=nome
            this._lote=lote
            this._preco=preco
            this._quantidadeEstoque=quantidadeEstoque
        }
        public get nome(){
            return this._nome
        }
        public get lote(){
            return this._lote
        }
        public get preco(){
            return this._preco
        }
        public get quantidadeEstoque(){
            return this._quantidadeEstoque
        }
        public set quantidadeEstoque(quantidade:number){
            if(quantidade>=0){
                this._quantidadeEstoque=quantidade
            }
        }
        public mostrarMedicamento(){
            console.log("nome: "+this._nome)
            console.log("quantidade em estoque: "+this._quantidadeEstoque)
            console.log("-------------------------")
        }
    }
    let medicamentos:medicamento[]=[]
    for(let i=0;i<10;i++){
        let nome=prompt("digite o nome do medicamento: ")||""
        let lote=prompt("digite o lote: ")||""
        let preco=Number(prompt("digite o preco: "))
        let quantidadeEstoque=Number(prompt("digite a quantidade em estoque: "))
        if(quantidadeEstoque<0){
            quantidadeEstoque=0
        }
        let novoMedicamento=new medicamento(nome,lote,preco,quantidadeEstoque)
        medicamentos.push(novoMedicamento)
        let continuar=prompt("deseja cadastrar outro medicamento? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    console.log("ESTOQUE CRITICO:")
    for(let i=0;i<medicamentos.length;i++){
        if(medicamentos[i].quantidadeEstoque<5){
            console.log("nome: "+medicamentos[i].nome)
            console.log("quantidade restante: "+medicamentos[i].quantidadeEstoque)
            console.log("-------------------------")
        }
    }
}