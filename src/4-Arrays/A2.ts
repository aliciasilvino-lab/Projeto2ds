// 2. Faça um programa que leia um número indeterminado de notas ou -1 para encerrar. Após esta
// entrada de dados, faça o seguinte:
// a) Mostre a quantidade de notas que foram lidas.
// b) Exiba todas as notas na ordem em que foram informadas.
// c) Exiba todas as notas na ordem inversa à que foram informadas.
// d) Calcule e mostre a soma das notas.
// e) Calcule e mostre a média das notas.
// f) Calcule e mostre a quantidade de notas acima da média calculada.

let notas: number[] = [];

let nota: number = Number(prompt("Digite uma nota (-1 para encerrar):"));

while (nota !== -1) {
    notas.push(nota);
    nota = Number(prompt("Digite uma nota (-1 para encerrar):"));
}

console.log(`Quantidade de notas: ${notas.length}`);

console.log("Notas informadas:", notas);

let reverso = [...notas].reverse();
console.log("Notas na ordem inversa:", reverso);

let soma: number = 0;
for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
console.log(`Soma das notas: ${soma}`);

let media: number = soma / notas.length;
console.log(`Média das notas: ${media.toFixed(2)}`);

let acimaMedia: number = 0;
for (let i = 0; i < notas.length; i++) {
    if (notas[i] > media) {
        acimaMedia++;
    }
}
console.log(`Quantidade de notas acima da média: ${acimaMedia}`);