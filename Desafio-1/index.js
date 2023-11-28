// Criação da Função
function calculoDivisiveis() {

    // Criação das váriaveis 
    const numero = parseInt(prompt("Insira o número desejado"));
    let soma = 0;

    // Verificação dos inteiros
    if (isNaN(numero) || numero <= 0) {
        console.log("Insira um número válido. Tente novamente");
        return
    }

    // Cálculo dos divisíveis
    for (let i = 1; i < numero; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            soma += i;
        }
    }

    // Resposta para o user
    console.log(`A soma dos valores divisíveis por 3 e 5 até ${numero} é: ${soma}`)

}

calculoDivisiveis();