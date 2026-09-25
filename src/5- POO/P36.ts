// 36. Portal de Cursos e Treinamentos Online
// Uma plataforma de ensino quer gerenciar a emissão de certificados de seus estudantes. A classe base
// Curso possui título e carga horária privados. A classe CursoLivre emite certificado automaticamente
// ao concluir as horas. A classe CursoTecnico possui um atributo adicional para o número do projeto
// final e só permite emitir o certificado se o projeto tiver nota aprovada (maior ou igual a 7). O
// programa deve solicitar repetidamente os dados dos cursos concluídos por um aluno e guardá-los em
// um array. No final, o sistema percorre a lista e dispara o método emitirCertificado() de cada
// curso, exibindo quais certificados foram liberados e quais ficaram pendentes.

export function questao36poo():void{
    class curso{
        private _titulo:string
        private _cargaHoraria:number
        constructor(titulo:string,cargaHoraria:number){
            this._titulo=titulo
            this._cargaHoraria=cargaHoraria
        }
        public get titulo(){
            return this._titulo
        }
        public get cargaHoraria(){
            return this._cargaHoraria
        }
        public emitirCertificado(){
            return false
        }
    }
    class cursoLivre extends curso{
        constructor(titulo:string,cargaHoraria:number){
            super(titulo,cargaHoraria)
        }
        public emitirCertificado(){
            return true
        }
    }
    class cursoTecnico extends curso{
        private _notaProjeto:number
        constructor(titulo:string,cargaHoraria:number,notaProjeto:number){
            super(titulo,cargaHoraria)
            this._notaProjeto=notaProjeto
        }
        public emitirCertificado(){
            if(this._notaProjeto>=7){
                return true
            }else{
                return false
            }
        }
    }
    let cursos:curso[]=[]
    for(let i=0;i<15;i++){
        let tipo=prompt("o curso e livre ou tecnico? (l/t)")||""
        let titulo=prompt("digite o titulo do curso: ")||""
        let cargaHoraria=Number(prompt("digite a carga horaria: "))
        if(tipo.toLowerCase()=="t"){
            let notaProjeto=Number(prompt("digite a nota do projeto final: "))
            let novoCurso=new cursoTecnico(titulo,cargaHoraria,notaProjeto)
            cursos.push(novoCurso)
        }else{
            let novoCurso=new cursoLivre(titulo,cargaHoraria)
            cursos.push(novoCurso)
        }
        let continuar=prompt("deseja cadastrar outro curso? (s/n)")
        if(continuar?.toLowerCase()!="s")break
    }
    console.log("CERTIFICADOS:")
    for(let i=0;i<cursos.length;i++){
        if(cursos[i].emitirCertificado()){
            console.log("certificado liberado: "+cursos[i].titulo)
        }else{
            console.log("certificado pendente: "+cursos[i].titulo)
        }
    }
}