// 4. Faça um programa que leia um conjunto de números (X) e imprima a quantidade de
// números pares (QPares) e a quantidade de números ímpares (QImpares) lidos. Admita que o
// valor -1 é utilizado como sentinela para fim de leitura.

let qtdPares: number = 0;
let qtdImpares: number = 0;
let numero: number = 0;

while (numero !== -1) {
    numero = Number(prompt("Digite um número (ou -1 para sair):"));
    if (numero !== -1) {
        if (numero % 2 === 0) {
            qtdPares++;
        } else {
            qtdImpares++;
        } 
    }
}
console.log(`Quantidade de números pares: ${qtdPares}`);
console.log(`Quantidade de números ímpares: ${qtdImpares}`);