// 2. Desenvolva a tabuada de um número usando for.

let num: number = Number(prompt("Digite um número para ver a tabuada:"));

function tabuada(num: number): void {
    console.log(`Tabuada do ${num}:`);

    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

tabuada(num);