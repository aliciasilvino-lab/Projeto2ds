// 1. Crie uma função somarAte que recebe um número inteiro positivo. Use um laço de repetição
// para calcular a soma de todos os números de 1 até o número fornecido. (Ex: somarAte(4)
// deve retornar 10, pois 1+2+3+4 = 10).

function somarAte(n: number): number {
    let soma: number = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
    }
    return soma;
}

let resultado = somarAte(4);
console.log(resultado); 