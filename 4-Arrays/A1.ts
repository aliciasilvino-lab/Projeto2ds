// 1. Mostre-me as seguintes listas, derivadas de: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// a) Números pares
// b) Números ímpares
// c) Todos os múltiplos de 2,3 e 4
// d) Lista reversa

let lista: number[] = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let pares = lista.filter(num => num % 2 === 0);
console.log("Pares:", pares);

let impares = lista.filter(num => num % 2 !== 0);
console.log("Ímpares:", impares);

let multiplos = lista.filter(num => num % 2 === 0 || num % 3 === 0 || num % 4 === 0);
console.log("Múltiplos de 2, 3 ou 4:", multiplos);

let reversa = [...lista].reverse();
console.log("Reversa:", reversa);