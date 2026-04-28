// 1. Crie um programa que peça números até o usuário digitar 0 e mostre:
//  Quantidade de números digitados
//  Soma total

let quantidade: number = 0;
let soma: number = 0;

let num2: number = Number(prompt("Digite um número (0 para parar):"));

while (num2 !== 0) {
    quantidade++;
    soma += num2;

    num2 = Number(prompt("Digite um número (0 para parar):"));
}

console.log(`Quantidade de números digitados: ${quantidade}`);
console.log(`Soma total: ${soma}`);
