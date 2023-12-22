// 3. Desenvolva um algoritmo que preenche um vetor com os 4
// primeiros números perfeitos.
let numerosPerfeitos = [];
let numero = 1;



while (numerosPerfeitos.length < 4) {
    let soma = 0;
    for (let i = 1; i < numero; i++) {
        if (numero % i === 0) {
            soma += i;
        }
    }
    if (soma === numero) {
        numerosPerfeitos.push(numero);
    }
    numero++;
}
document.write(numerosPerfeitos +"<br>");