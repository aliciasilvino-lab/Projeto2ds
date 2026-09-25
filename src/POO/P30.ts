// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

export function questao30poo():void{
    class passagem{
        private _nome:string
        private _cpf:string
        private _valorBase:number
        constructor(nome:string,cpf:string,valorBase:number){
            this._nome=nome
            this._cpf=cpf
            this._valorBase=valorBase
        }
        public get nome(){
            return this._nome
        }
        public get cpf(){
            return this._cpf
        }
        public get valorBase(){
            return this._valorBase
        }
        public calcularValor(){
            return this._valorBase
        }
        public mostrarPassagem(){
            console.log("nome: "+this._nome)
            console.log("cpf: "+this._cpf)
            console.log("valor: R$ "+this.calcularValor())
            console.log("-------------------------")
        }
    }
    class estudantil extends passagem{
        constructor(nome:string,cpf:string,valorBase:number){
            super(nome,cpf,valorBase)
        }
        public calcularValor(){
            return this.valorBase*0.5
        }
        public mostrarPassagem(){
            console.log("nome: "+this.nome)
            console.log("cpf: "+this.cpf)
            console.log("valor base: R$ "+this.valorBase)
            console.log("valor com desconto: R$ "+this.calcularValor())
            console.log("-------------------------")
        }
    }
    let passagens:passagem[]=[]
    for(let i=0;i<15;i++){
        let tipo=prompt("a passagem e comum ou estudantil? (c/e)")||""
        let nome=prompt("digite o nome do passageiro: ")||""
        let cpf=prompt("digite o CPF: ")||""
        let valorBase=Number(prompt("digite o valor base da passagem: "))
        if(tipo.toLowerCase()=="e"){
            let novaPassagem=new estudantil(nome,cpf,valorBase)
            passagens.push(novaPassagem)
        }else{
            let novaPassagem=new passagem(nome,cpf,valorBase)
            passagens.push(novaPassagem)
        }
        let continuar=prompt("deseja cadastrar outra passagem? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    let faturamentoTotal=0
    console.log("PASSAGENS VENDIDAS:")
    for(let i=0;i<passagens.length;i++){
        passagens[i].mostrarPassagem()
        faturamentoTotal+=passagens[i].calcularValor()
    }
    console.log("FATURAMENTO TOTAL: R$ "+faturamentoTotal)
}