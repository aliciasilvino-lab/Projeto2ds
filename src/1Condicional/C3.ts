// 3. Crie um programa que solicite dois números e simule um menu de uma calculadora:
// 1 - Soma
// 2 - Subtração
// 3 - Multiplicação
// 4 - Divisão
// Use switch...Case

let nume1:number = Number(prompt("digite o primeiro número: "))
let nume2:number = Number(prompt("digite o segundo número: "))
let opcao:number = Number(prompt("digite (1-Soma | 2-subtração | 3- Multiplicação | 4-divisão )"))

let resul:number

switch(opcao){
    case 1:
        resul = nume1 + nume2;
        console.log(`Soma: ${resul}`)
        break;
    case 2:
        resul = nume1 - nume2;
        console.log(`Subtração: ${resul}`)
        break;
    case 3:
        resul = nume1 * nume2
        console.log(`Multilicação: ${resul}`)
        break;
    case 4:
        if(nume2 !==0){
            resul = nume1/nume2;
            console.log(`Divisão: ${resul}`)
            break;
        }else{
            console.log("Erro: divisão por zero")   
        }
        break;
        
    default:
        console.log(`Opção inválida`);
}