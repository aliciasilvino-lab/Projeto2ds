// 17. Controle de Frequência do Refeitório do IFS
// O Refeitório do IFS deseja controlar o acesso de seus usuários. Todo usuário possui um identificador
// numérico interno e o nome completo. Os usuários dividem-se em Alunos (que possuem o curso) e
// Servidores (que possuem o departamento). O sistema deve pedir para o operador cadastrar os usuários
// que estão na fila. Cada vez que um usuário passa pela catraca, um método deve registrar essa presença
// em um histórico (array). Ao digitar um comando de encerramento, o programa exibe a listagem de
// quem almoçou no dia, mostrando mensagens personalizadas para cada tipo de usuário através de um
// método comum de identificação, além de exibir a quantidade total de acessos de alunos e servidores.

export function questao17poo():void{
    class usuario{
        id:number
        nome:string
        constructor(id:number,nome:string){
            this.id=id
            this.nome=nome
        }
        identificar(){
            return "usuario: "+this.nome
        }
    }
    class aluno extends usuario{
        curso:string
        constructor(id:number,nome:string,curso:string){
            super(id,nome)
            this.curso=curso
        }
        identificar(){
            return "aluno: "+this.nome+" - curso: "+this.curso
        }
    }
    class servidor extends usuario{
        departamento:string
        constructor(id:number,nome:string,departamento:string){
            super(id,nome)
            this.departamento=departamento
        }
        identificar(){
            return "servidor: "+this.nome+" - departamento: "+this.departamento
        }
    }
    let usuarios:usuario[]=[]
    let historico:usuario[]=[]

    while(true){
        let tipo=prompt("1 - aluno\n2 - servidor\n3 - encerrar")
        if(tipo=="3")break
        let id=Number(prompt("digite o id: "))
        let nome=prompt("digite o nome: ")||""
        if(tipo=="1"){
            let curso=prompt("digite o curso: ")||""
            usuarios.push(new aluno(id,nome,curso))
        }else if(tipo=="2"){
            let departamento=prompt("digite o departamento: ")||""
            usuarios.push(new servidor(id,nome,departamento))
        }
    }

    for(let i=0;i<usuarios.length;i++){
        historico.push(usuarios[i])
    }

    let alunos=0
    let servidores=0
    let resultado="pessoas que almoçaram: "

    for(let i=0;i<historico.length;i++){
        resultado+=historico[i].identificar()+"\n"
        if(historico[i] instanceof aluno)alunos++
        else servidores++
    }
    resultado+="\ntotal de alunos: "+alunos
    resultado+="\ntotal de servidores: "+servidores
    alert(resultado)
}