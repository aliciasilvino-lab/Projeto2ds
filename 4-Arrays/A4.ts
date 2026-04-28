// 4. Calculadora de Média do ENEM
// Um professor de cursinho pré-ENEM precisa de uma ferramenta para calcular a média de seus
// alunos em diferentes disciplinas. Ele quer que a média seja arredondada para duas casas decimais.
// Crie uma função chamada calcular_media(notas) que receba um array de notas como argumento.
// A função deve:
// ● Calcular a média das notas.
// ● Arredondar a média para duas casas decimais.
// ● Retornar o valor da média.

function calcular_media(not: number[]): number {
    let soma: number = 0;

    for (let i = 0; i < not.length; i++) {
        soma += not[i];
    }
    let media = soma / not.length;

    return Number(media.toFixed(2));
}

let not = [650, 720.5, 800, 690];
let mediaFinal = calcular_media(not);

console.log(`Média: ${mediaFinal}`);