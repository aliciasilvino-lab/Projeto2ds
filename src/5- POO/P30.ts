// 30. O Sistema de Bilhetagem de Transporte Intermunicipal
// O sistema de transportes da região precisa de um software para gerenciar a venda de passagens. Crie
// um modelo onde cada passagem possua o nome do passageiro, CPF e o valor base da corrida. Garanta
// que esses dados não sejam alterados diretamente de fora da classe. Existem duas modalidades: a
// Passagem Comum e a Passagem Estudantil (que aplica automaticamente 50% de desconto no valor
// base). O programa deve solicitar ao usuário, em um laço de repetição, os dados de várias passagens e
// o seu tipo. No final, o sistema exibe o relatório de todas as passagens vendidas e calcula o
// faturamento total do dia utilizando uma estrutura de redução ou soma acumulada.

export function questao30poo():void{
    class passageiro{
        private _nome:string
        private _cpf:number
        private _valorBase:number
        constructor(nome:string,cpf:number,valorBase:number){
            this._nome=nome
            this._cpf=cpf
            this._valorBase=valorBase
        }
        public get nome():string{
            return this._nome
        }
        public get cpf():number{
            return this._cpf
        }
        public get valorBase():number{
            return this._valorBase
        }
    }
    class passagemComum extends passageiro{
        private _valorFinalC:number
        constructor(nome:string,cpf:number,valorBase:number,valorFinalC:number){
            super(nome,cpf,valorBase)
            this._valorFinalC=valorFinalC
        }
        public get valorFinalC():number{
            return this.valorBase
        }

    }
    class passagemEstudantil extends passageiro{
        private _valorFinalE:number
        constructor(nome:string,cpf:number,valorBase:number,valorFinalE:number){
            super(nome,cpf,valorBase)
            this._valorFinalE=valorFinalE
        }
        public get valorFinalE():number{
            return this._valorFinalE*0.5
        }
    }
    let continuar="s"
    let passagens:passageiro[]=[]
    while(continuar==="s"){
        let nome=String(prompt(`Nome: `));
        let cpf=Number(prompt(`Cpf: `));
        let valorBase=Number(prompt(`Valor Base: `))
        let tipoPassagens=Number(prompt(`Passagem: \n1-Passagem Comum\n2-Passagem Estudantil `))
        continuar=String(prompt(`Digite "s" para rodar ou "n" pra sair: `));
        if(tipoPassagens===1) {
            passagens.push(
                new passagemComum(nome,cpf,valorBase,valorFinalC)
            )
        }else if(tipoPassagens===2){
            passagens.push(
                new passagemEstudantil(nome,cpf,valorBase,valorFinalE)
            )
        }else{
            console.log("Tipo de passagem inválido!")
        }
    }
    console.log("===== RELATÓRIO =====")
}