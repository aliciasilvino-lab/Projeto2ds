// 5. Organizador de Tarefas Diárias
// Você quer organizar suas tarefas de casa e da escola para não esquecer nada. Crie uma função
// chamada gerenciar_tarefas() que não receba argumentos. A função deve:
// a) Permitir que o usuário adicione tarefas a um vetor.
// b) Permitir que o usuário marque tarefas como concluídas (removendo-as da lista, por
// exemplo).
// c) Permitir que o usuário exiba todas as tarefas pendentes.
// Utilize um menu interativo com opções (adicionar, concluir, exibir, sair) e um laço while para
// manter o programa rodando até o usuário escolher sair.

function gerencia_tarefa(): void {
    let tarefas: string[] = [];
    let opcao: string = "";

    while (opcao !== "4") {
        opcao = String(prompt(
            "Escolha uma opção:\n" +
            "1 - Adicionar tarefa\n" +
            "2 - Concluir tarefa\n" +
            "3 - Exibir tarefas\n" +
            "4 - Sair"
        ));

        if (opcao === "1") {
            let tarefa = String(prompt("Digite a tarefa:"));
            tarefas.push(tarefa);

        } else if (opcao === "2") {
            let tarefaRemover = String(prompt("Digite a tarefa concluída:"));
            let index = tarefas.indexOf(tarefaRemover);

            if (index !== -1) {
                tarefas.splice(index, 1);
                console.log("Tarefa concluída e removida.");
            } else {
                console.log("Tarefa não encontrada.");
            }

        } else if (opcao === "3") {
            console.log("Tarefas pendentes:", tarefas);
        }
    }
}

gerencia_tarefa();