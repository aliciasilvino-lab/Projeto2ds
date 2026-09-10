// 14. Arrays Repetição Encapsulamento
// Uma biblioteca precisa catalogar seus livros. Crie uma classe Livro com título, autor, ano de
// publicação e disponibilidade (boolean). O programa deve permitir cadastrar até 15 livros via teclado,
// listar todos os disponíveis e registrar o empréstimo de um livro pesquisado pelo título.

class livro{
    private _titulo:string;
    private _autor:string;
    private _anoPublicacao:number;
    private _disponibilidade:boolean;
    constructor(titulo:string,autor:string,anoPublicacao:number){
        this._titulo = titulo;
        this._autor = autor;
        this._anoPublicacao = anoPublicacao;
        this._disponibilidade = true;
    }
    public get titulo(){
        return this._titulo;
    }
    public get autor(){
        return this._autor;
    }
    public get anoPublicacao(){
        return this._anoPublicacao;
    }
    public get disponibilidade(){
        return this._disponibilidade;
    }
    public emprestar(){
        if (this._disponibilidade){
            this._disponibilidade = false;
            return true;
        }
        return false;
    }
    public mostrarLivro(){
        console.log("Título: " + this._titulo);
        console.log("Autor: " + this._autor);
        console.log("Ano de publicação: " + this._anoPublicacao);
        console.log("Disponível: " + (this._disponibilidade ? "Sim" : "Não"));
        console.log("-------------------------");
    }
}
let livros: livro[] = [];
for (let i = 0; i < 15; i++) {
    let titulo = prompt("Digite o título do livro:");
    let autor = prompt("Digite o autor do livro:");
    let ano = Number(prompt("Digite o ano de publicação:"));
    let novoLivro = new livro(titulo,autor,ano);
    livros.push(novoLivro);

    let continuar = prompt("Deseja cadastrar outro livro? (s/n)");
    if (continuar?.toLowerCase() != "s") {
        break;
    }
}
console.log("LIVROS DISPONÍVEIS:");
for (let i = 0; i < livros.length; i++){
    if (livros[i].disponibilidade){
        livros[i].mostrarLivro();
    }
}
let tituloPesquisa = prompt("Digite o título do livro que deseja emprestar:");
let encontrado = false;

for (let i = 0; i < livros.length; i++){
    if (livros[i].titulo.toLowerCase() == tituloPesquisa?.toLowerCase()){
        encontrado = true;
        if(livros[i].emprestar()){
            console.log("Livro emprestado com sucesso!");
        }else{
            console.log("Esse livro já está emprestado.");
        }
        break;
    }
}
if(!encontrado){
    console.log("Livro não encontrado.");
}