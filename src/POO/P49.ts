// 49. Ficha de Triagem e Vacinação de Clínica Veterinária
// Uma clínica veterinária precisa de um programa para controlar a fila de vacinação do dia. Crie a
// classe Pet com os atributos privados nome, especie, peso e vacinado (boolean com valor inicial
// false). Crie métodos de leitura e escrita para todos os atributos e o método aplicarVacina(), que
// altera o status de vacinado para true e exibe uma mensagem confirmando a imunização. O programa
// deve interagir com o recepcionista solicitando em um laço os dados de até 10 animais que chegaram
// para atendimento, armazenando-os em um array. Após o cadastro completo da fila, o sistema executa
// um novo laço simulando o atendimento do veterinário: para cada pet da lista, se o animal ainda não
// estiver vacinado, o programa chama o método aplicarVacina(). Ao término, exibe-se a quantidade
// total de pets imunizados na sessão.

export function questao49poo():void{
    class pet{
        private _nome:string
        private _especie:string
        private _peso:number
        private _vacinado:boolean
        constructor(nome:string,especie:string,peso:number){
            this._nome=nome
            this._especie=especie
            this._peso=peso
            this._vacinado=false
        }
        public get nome(){
            return this._nome
        }
        public get especie(){
            return this._especie
        }
        public get peso(){
            return this._peso
        }
        public get vacinado(){
            return this._vacinado
        }
        public set nome(nome:string){
            this._nome=nome
        }
        public set especie(especie:string){
            this._especie=especie
        }
        public set peso(peso:number){
            this._peso=peso
        }
        public set vacinado(vacinado:boolean){
            this._vacinado=vacinado
        }
        public aplicarVacina(){
            this._vacinado=true
            console.log(this._nome+" foi vacinado com sucesso!")
        }
    }
    let pets:pet[]=[]
    for(let i=0;i<10;i++){
        let nome=prompt("digite o nome do pet: ")||""
        let especie=prompt("digite a especie do pet: ")||""
        let peso=Number(prompt("digite o peso do pet: "))
        let novoPet=new pet(nome,especie,peso)
        pets.push(novoPet)
        let continuar=prompt("deseja cadastrar outro pet? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    let totalImunizados=0
    console.log("ATENDIMENTO VETERINARIO:")
    for(let i=0;i<pets.length;i++){
        if(!pets[i].vacinado){
            pets[i].aplicarVacina()
            totalImunizados++
        }
    }
    console.log("TOTAL DE PETS IMUNIZADOS: "+totalImunizados)
}