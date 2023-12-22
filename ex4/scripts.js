// 4. Desenvolva um algoritmo que declare uma lista de 10 números e
// solicite um número para o usuário e no final informe se o número
// que o usuário digitou está dentro da lista ou não.
let vetor = [1,2,3,4,5,6,7,8,9,10]

let numero = Number(prompt("digite um número"))

for (let sorteado of vetor) {
    if (sorteado == numero) {
        console.log('Está na lista')
        break;
    } console.log('Não está na lista')
    break;
} 