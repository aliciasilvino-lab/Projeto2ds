// 4. Ler dois valores e imprimir uma das três mensagens a seguir:
// ● ‘Números iguais’, caso os números sejam iguais;
// ● ‘Primeiro é maior’, caso o primeiro seja maior que o segundo;
// ● ‘Segundo maior’, caso o segundo seja maior que o primeiro.

// Comparação entre dois números

let num1:number = Number(prompt(`Digite o primeiro número: `))
let num2:number = Number(prompt(`Digite o segundo número: `))

if (num1 === num2) {
    console.log("Números iguais");
} else if (num1 > num2) {
    console.log("Primeiro é maior");
} else {
    console.log("Segundo maior");
}