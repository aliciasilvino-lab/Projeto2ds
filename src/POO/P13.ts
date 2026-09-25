// 13. Uma escola quer cadastrar alunos e suas notas. O sistema deve solicitar o nome do aluno e duas notas.
// Cada aluno será um objeto. Crie um método que calcule a média e informe se o aluno foi aprovado
// (média &gt;= 7) ou reprovado (caso contrário).

export function questao13poo():void{
    class aluno{
        nome:string
        nota1:number
        nota2:number
        constructor(nome:string,nota1:number,nota2:number){
            this.nome=nome
            this.nota1=nota1
            this.nota2=nota2
        }
        media(){
            return (this.nota1+this.nota2)/2
        }
        resultado(){
            if(this.media()>=7)return "aprovado"
            else return "reprovado"
        }
    }
    let nome=prompt("digite o nome do aluno: ")||""
    let nota1=Number(prompt("digite a primeira nota: "))
    let nota2=Number(prompt("digite a segunda nota: "))
    let aluno1=new aluno(nome,nota1,nota2)
    alert("nome: "+aluno1.nome+
    "\nmedia: "+aluno1.media()+
    "\nresultado: "+aluno1.resultado())
}