// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

export function questao14poo():void{
    class livro{
        private _titulo:string
        private _autor:string
        private _anoPublicacao:number
        private _disponibilidade:boolean
        constructor(titulo:string,autor:string,anoPublicacao:number){
            this._titulo=titulo
            this._autor=autor
            this._anoPublicacao=anoPublicacao
            this._disponibilidade=true
        }
        public get titulo(){
            return this._titulo
        }
        public get autor(){
            return this._autor
        }
        public get anoPublicacao(){
            return this._anoPublicacao
        }
        public get disponibilidade(){
            return this._disponibilidade
        }
        public emprestar(){
            if(this._disponibilidade){
                this._disponibilidade=false
                return true
            }
            return false
        }
        public mostrarLivro(){
            console.log("titulo: "+this._titulo)
            console.log("autor: "+this._autor)
            console.log("ano de publicacao: "+this._anoPublicacao)
            console.log("disponivel: "+(this._disponibilidade?"sim":"nao"))
            console.log("-------------------------")
        }
    }
    let livros:livro[]=[]
    for(let i=0;i<15;i++){
        let titulo=prompt("digite o titulo do livro: ")||""
        let autor=prompt("digite o autor do livro: ")||""
        let ano=Number(prompt("digite o ano de publicacao: "))
        let novoLivro=new livro(titulo,autor,ano)
        livros.push(novoLivro)
        let continuar=prompt("deseja cadastrar outro livro? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    console.log("LIVROS DISPONIVEIS:")
    for(let i=0;i<livros.length;i++){
        if(livros[i].disponibilidade){
            livros[i].mostrarLivro()
        }
    }
    let tituloPesquisa=prompt("digite o titulo do livro que deseja emprestar: ")||""
    let encontrado=false
    for(let i=0;i<livros.length;i++){
        if(livros[i].titulo.toLowerCase()==tituloPesquisa.toLowerCase()){
            encontrado=true
            if(livros[i].emprestar()){
                console.log("livro emprestado com sucesso!")
            }else{
                console.log("esse livro ja esta emprestado.")
            }
            break
        }
    }
    if(!encontrado){
        console.log("livro nao encontrado.")
    }
}