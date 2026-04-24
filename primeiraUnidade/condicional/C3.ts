// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let num1:number = Number(prompt("digite o primeiro número: "))
let num2:number = Number(prompt("digite o segundo número: "))
let opcao:number = Number(prompt("digite (1-Soma | 2-subtração | 3- Multiplicação | 4-divisão )"))

let resultado:number

switch(opcao){
    case 1:
        resultado = num1 + num2;
        console.log(`Soma: ${resultado}`)
        break;
    case 2:
        resultado = num1 - num2;
        console.log(`Subtração: ${resultado}`)
        break;
    case 3:
        resultado = num1 * num2
        console.log(`Multilicação: ${resultado}`)
        break;
    case 4:
        if(num2 !==0){
            resultado = num1/num2;
            console.log(`Divisão: ${resultado}`)
            break;
        }else{
            console.log("Erro: divisão por zero")   
        }
        break;
        
    default:
        console.log(`Opção inválida`);
}