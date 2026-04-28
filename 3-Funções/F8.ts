// 8. Controle de Estoque de Loja (Loop e Relatório)
// Faça um programa que gerencie a entrada de produtos em um estoque. O programa deve solicitar o
// preço unitário do produto e a quantidade comprada.
//  Crie uma função que recebe preço e quantidade. Se a quantidade for maior que 10 unidades,
// aplica 5% de desconto sobre o valor total daquele item. Retorna o valor final.
//  O programa deve repetir a solicitação até que o preço informado seja zero.
//  Ao encerrar, exiba o total geral investido no estoque e a média de preço dos produtos
// cadastrados.

function calcularValorFinal(preco: number, quantidade: number): number {
    let total = preco * quantidade;

    if (quantidade > 10) {
        total = total * 0.95;
    }

    return total;
}
let totalGeral: number = 0;
let somaPrecos: number = 0;
let qtdProdutos: number = 0;

let preco: number = Number(prompt("Digite o preço do produto (0 para encerrar):"));

while (preco !== 0) {
    let quantidade: number = Number(prompt("Digite a quantidade:"));

    let valorFinal = calcularValorFinal(preco, quantidade);

    totalGeral += valorFinal;
    somaPrecos += preco;
    qtdProdutos++;

    preco = Number(prompt("Digite o preço do produto (0 para encerrar):"));
}

let media: number = somaPrecos / qtdProdutos;

console.log(`Total geral investido: R$ ${totalGeral.toFixed(2)}`);
console.log(`Média de preço dos produtos: R$ ${media.toFixed(2)}`);