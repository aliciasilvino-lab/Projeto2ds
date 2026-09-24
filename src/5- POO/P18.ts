// 18. Folha de Pagamento Unificada do IFS
// O setor de Recursos Humanos do IFS necessita de um novo software para gerenciar e calcular a folha
// salarial mensal de seus colaboradores. Sabe-se que todos os colaboradores do instituto possuem
// características fundamentais em comum: um nome, uma matrícula e um salário base. Por questões de
// segurança, esses três dados não podem ser acessados diretamente de fora da classe, exigindo métodos
// públicos específicos para sua leitura e modificação. Além disso, a classe base deve conter um método
// para calcular o salário, que por padrão retorna apenas o valor do salário base.

// No entanto, o IFS possui três categorias distintas de funcionários, que herdam as características da
// classe base, mas possuem regras próprias para o cálculo da remuneração final. A primeira categoria é
// a de Professor, que possui como atributo privado o seu regime de trabalho (por exemplo, &quot;DE&quot; para
// Dedicação Exclusiva); caso o regime seja, o professor recebe um acréscimo de 20% sobre o seu
// salário base no momento do cálculo salarial. A segunda categoria é a de Técnico Administrativo, que
// possui um atributo privado para armazenar o valor fixo de um auxílio-alimentação de R$ 1.000,00,
// valor este que deve ser somado ao seu salário base no cálculo final. A terceira categoria é a de Diretor,
// que possui como atributos privados o seu departamento e o valor de uma gratificação de função, que
// também deve ser incorporada ao salário base no cálculo de sua remuneração.
// Para o funcionamento do sistema, o programa deve rodar dentro de um laço de repetição contínuo que
// interaja com o usuário. A cada iteração, o software deve perguntar qual tipo de funcionário se deseja
// cadastrar (Professor, Técnico Administrativo ou Diretor) ou se o usuário deseja encerrar o programa.
// Conforme a escolha, o sistema deve solicitar os dados do colaborador via teclado, inseri-los no objeto
// correto e acionar o método de cálculo salarial específico de cada um de forma polimórfica. O
// programa deve utilizar variáveis acumuladoras dentro do laço para somar e acompanhar os custos
// parciais de cada categoria. Por fim, quando o usuário optar por encerrar o cadastro, o laço deve ser
// interrompido e o software exibirá um relatório final contendo o custo total gasto com os professores, o
// custo total com os técnicos administrativos, o custo total com os diretores e, por último, o custo total
// geral que a instituição terá com a folha de pagamento daquele mês.

export function questao18poo():void{
    class Funcionario{
        private nome:string;
        private matricula:number;
        private salarioBase:number;
        constructor(nome:string,matricula:number,salarioBase:number){
            this.nome=nome;
            this.matricula=matricula;
            this.salarioBase=salarioBase;
        }
        getNome(){
            return this.nome;}
        setNome(nome:string){
            this.nome=nome;}
        getMatricula(){
            return this.matricula;}
        setMatricula(matricula:number){
            this.matricula=matricula;}
        getSalarioBase(){
            return this.salarioBase;}
        setSalarioBase(salario:number){
            this.salarioBase=salario;}
        calcularSalario():number{
            return this.salarioBase;
            }
    }
    class Professor extends Funcionario{
        private regime:string;
        constructor(nome:string,matricula:number,salario:number,regime:string){
            super(nome,matricula,salario);
            this.regime=regime;
        }
        calcularSalario():number{
        if(this.regime=="DE")
            return this.getSalarioBase()*1.20;
            return this.getSalarioBase();
        }
    }   
    class TecnicoAdministrativo extends Funcionario{
        private auxilio:number=1000;  
        calcularSalario():number{
            return this.getSalarioBase()+this.auxilio;
        }
    }
    class Diretor extends Funcionario{
        private departamento:string;
        private gratificacao:number;
        constructor(nome:string,matricula:number,salario:number,departamento:string,gratificacao:number){
            super(nome,matricula,salario);
            this.departamento=departamento;
            this.gratificacao=gratificacao;
        }
        calcularSalario():number{
            return this.getSalarioBase()+this.gratificacao;
        }
    }
        let professores=0;
        let tecnicos=0;
        let diretores=0;
        while(true){
            let tipo=prompt("1-Professor\n2-Técnico Administrativo\n3-Diretor\n0-Sair");
            if(tipo=="0")break;
            let nome=prompt("Nome:")!;
            let matricula=Number(prompt("Matrícula:"));
            let salario=Number(prompt("Salário base:"));
            let funcionario:Funcionario;
            if(tipo=="1"){
                let regime=prompt("Regime de trabalho:")!;
                funcionario=new Professor(nome,matricula,salario,regime);
                professores+=funcionario.calcularSalario();
            }
            else if(tipo=="2"){
                funcionario=new TecnicoAdministrativo(nome,matricula,salario);
                tecnicos+=funcionario.calcularSalario();
            }
            else if(tipo=="3"){
            let departamento=prompt("Departamento:")!;
            let gratificacao=Number(prompt("Gratificação:"));
            funcionario=new Diretor(nome,matricula,salario,departamento,gratificacao);
            diretores+=funcionario.calcularSalario();
            }
            else{
                alert("Opção inválida!");
            }
        }   
    let total=professores+tecnicos+diretores;   
    console.log("====RELATÓRIO FINAL====");
    console.log("Professores: R$ "+professores.toFixed(2));
    console.log("Técnicos Administrativos: R$ "+tecnicos.toFixed(2));
    console.log("Diretores: R$ "+diretores.toFixed(2));
    console.log("Total geral: R$ "+total.toFixed(2));
        
}