// 3. Faça um programa que leia nome, horas trabalhadas, salário-hora e sexo de um grupo de
// operários. Ao final de cada solicitação pergunte se o usuário quer continuar ou não o
// programa.
// Calcule e imprima:
// ● Salário total dos funcionários, o maior salário, juntamente com o nome de quem o
// recebeu;
// ● O número de funcionários do sexo masculino e feminino cadastrado;
// ● O percentual de funcionários homens e mulheres cadastrados

let totalSalarios: number = 0;
let maiorSalario: number = 0;
let nomeMaiorSalario: string = "";

let qtdHomens: number = 0;
let qtdMulheres: number = 0;
let totalFuncionarios: number = 0;

let continuar: string = "s";

while (continuar.toLowerCase() === "s") {
    let nome: string = String(prompt("Digite o nome:"));
    let horas: number = Number(prompt("Horas trabalhadas:"));
    let salarioHora: number = Number(prompt("Salário por hora:"));
    let sexo: string = String(prompt("Sexo (M/F):")).toLowerCase();

    let salario: number = horas * salarioHora;

    totalSalarios += salario;

    if (salario > maiorSalario) {
        maiorSalario = salario;
        nomeMaiorSalario = nome;
    }

    if (sexo === "m") {
        qtdHomens++;
    } else if (sexo === "f") {
        qtdMulheres++;
    }

    totalFuncionarios++;

    continuar = String(prompt("Deseja continuar? (s/n):"));
}

let percHomens: number = (qtdHomens / totalFuncionarios) * 100;
let percMulheres: number = (qtdMulheres / totalFuncionarios) * 100;

console.log(`Total de salários: ${totalSalarios}`);
console.log(`Maior salário: ${maiorSalario} (Funcionário: ${nomeMaiorSalario})`);
console.log(`Homens: ${qtdHomens}`);
console.log(`Mulheres: ${qtdMulheres}`);
console.log(`Percentual de homens: ${percHomens.toFixed(2)}%`);
console.log(`Percentual de mulheres: ${percMulheres.toFixed(2)}%`);