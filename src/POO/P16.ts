// 16. Um zoológico possui mamíferos e aves. Ambos têm nome, espécie, idade e sexo todos privados.
// Mamíferos têm tipo de alimentação; aves têm se são migratórias ou não. Cada animal tem um
// comportamento de ‘emitir som’ e ‘mover’ diferente. O sistema deve cadastrar animais, listar por tipo
// (Mamíferos ou Aves) e simular a &#39;hora da alimentação&#39; chamando o método de som de cada um.

export function questao16poo():void{
    class animal{
        private nome:string
        private especie:string
        private idade:number
        private sexo:string
        constructor(nome:string,especie:string,idade:number,sexo:string){
            this.nome=nome
            this.especie=especie
            this.idade=idade
            this.sexo=sexo
        }
        emitirSom(){
            return "som do animal"
        }
        mover(){
            return "animal se movendo"
        }
        getNome(){
            return this.nome
        }
    }
    class mamifero extends animal{
        alimentacao:string
        constructor(nome:string,especie:string,idade:number,sexo:string,alimentacao:string){
            super(nome,especie,idade,sexo)
            this.alimentacao=alimentacao
        }
        emitirSom(){
            return "o mamifero emitiu um som"
        }
        mover(){
            return "o mamifero esta andando"
        }
    }
    class ave extends animal{
        migratoria:boolean
        constructor(nome:string,especie:string,idade:number,sexo:string,migratoria:boolean){
            super(nome,especie,idade,sexo)
            this.migratoria=migratoria
        }
        emitirSom(){
            return "a ave emitiu um som"
        }
        mover(){
            return "a ave esta voando"
        }
    }
    let animais:animal[]=[]
    while(true){
        let tipo=prompt("1 - mamifero\n2 - ave\n3 - sair")
        if(tipo=="3")break
        let nome=prompt("digite o nome: ")||""
        let especie=prompt("digite a especie: ")||""
        let idade=Number(prompt("digite a idade: "))
        let sexo=prompt("digite o sexo: ")||""
        if(tipo=="1"){
            let alimentacao=prompt("digite o tipo de alimentacao: ")||""
            animais.push(new mamifero(nome,especie,idade,sexo,alimentacao))
        }else if(tipo=="2"){
            let migratoria=prompt("e migratoria? sim/nao")=="sim"
            animais.push(new ave(nome,especie,idade,sexo,migratoria))
        }
    }
    console.log("MAMIFEROS E AVES:")
    for(let i=0;i<animais.length;i++){
        console.log(animais[i].getNome()+" - "+animais[i].emitirSom())
    }
    console.log("HORA DA ALIMENTACAO:")
    for(let i=0;i<animais.length;i++){
        console.log(animais[i].getNome()+": "+animais[i].emitirSom())
    }
}