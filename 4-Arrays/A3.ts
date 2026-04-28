// 3. Gerador de Lista de Compras Personalizada
// Sua mãe pediu para você fazer uma lista de compras para o supermercado. Ela quer que você possa
// adicionar itens e a quantidade de cada um.
// Crie uma função chamada gerar_lista_compras() que não recebe argumentos. A função deve:
// ● Permitir que o usuário adicione itens à lista(array) até que ele digite &quot;fim&quot;.
// ● Permitir que o usuário apresente todos os itens da lista.
// ● Permitir que o usuário apresente quantos itens há na lista.
// ● Permitir que o usuário remova itens da lista.

function gerar_lista_compras(): void {
    let lista: string[] = [];
    let opcao: string = "";

    while (opcao !== "fim") {
        opcao = String(prompt(
            "Digite:\n" +
            "1 - Adicionar item\n" +
            "2 - Mostrar lista\n" +
            "3 - Quantidade de itens\n" +
            "4 - Remover item\n" +
            "fim - Encerrar"
        ));

        if (opcao === "1") {
            let item = String(prompt("Digite o item:"));
            lista.push(item);

        } else if (opcao === "2") {
            console.log("Lista de compras:", lista);

        } else if (opcao === "3") {
            console.log(`Quantidade de itens: ${lista.length}`);

        } else if (opcao === "4") {
            let itemRemover = String(prompt("Digite o item para remover:"));
            let index = lista.indexOf(itemRemover);

            if (index !== -1) {
                lista.splice(index, 1);
                console.log("Item removido.");
            } else {
                console.log("Item não encontrado.");
            }
        }
    }
}

gerar_lista_compras();