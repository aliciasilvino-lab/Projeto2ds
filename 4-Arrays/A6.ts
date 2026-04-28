// 6. Crie um Array vazio que irá armazenar 15 nomes de pessoas (usando laço de repetição);
// a) Pedir os nomes das pessoas usando o Prompt e o método push();
// b) Apresentar os nomes digitados;
// c) Ordenar o vetor usando o sort();
// d) Apresentar os nomes inseridos de forma ordenada.

function gerenciar_tarefas(): void {
    let tarefas: string[] = [];
    let opcao: string = "";

    while (opcao !== "4") {
        console.log("1 - Adicionar tarefa");
        console.log("2 - Concluir tarefa");
        console.log("3 - Exibir tarefas");
        console.log("4 - Sair");

        opcao = String(prompt("Escolha uma opção:"));

        if (opcao === "1") {
            let tarefa = String(prompt("Digite a tarefa:"));
            tarefas.push(tarefa);

        } else if (opcao === "2") {
            let tarefaRemover = String(prompt("Digite a tarefa concluída:"));

            let tamanhoAntes = tarefas.length;
            tarefas = tarefas.filter(t => t !== tarefaRemover);

            if (tarefas.length < tamanhoAntes) {
                console.log("Tarefa concluída e removida.");
            } else {
                console.log("Tarefa não encontrada.");
            }

        } else if (opcao === "3") {
            console.log("Tarefas pendentes:", tarefas);
        }
    }
}

gerenciar_tarefas();