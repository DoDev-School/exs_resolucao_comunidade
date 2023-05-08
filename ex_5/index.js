// 1

// let num = parseInt(prompt("Digite um número: "));
// let i = 0;
// while (i < 4) {
//   console.log("Tabuada do " + (num + i) + ":");
//   let j = 1;
//   while (j <= 10) {
//     console.log((num + i) + " x " + j + " = " + (num + i) * j);
//     j++;
//   }
//   console.log("---------------");
//   i++;
// }

/*
Nesse algoritmo, o usuário é solicitado a digitar um número e, em seguida, é feita uma contagem com o primeiro laço WHILE, exibindo a tabuada desse número e dos próximos 3 números. Para cada número, é feita uma contagem com o segundo laço WHILE, exibindo o resultado da multiplicação do número por cada um dos números de 1 a 10. No final de cada tabuada, é exibida uma linha separadora para facilitar a visualização.
*/

// 2

let nome = prompt("Digite o nome do cliente: ");
let cpf = prompt("Digite o CPF do cliente: ");
let saldoTotal = 0;
let valor, opcao, continuar = "S", qtdeOperacoes = 0, maiorValor = 0, somaValores = 0, mediaValores = 0;

while (continuar == "S") {
    opcao = prompt("Olá, " + nome + "! O que deseja fazer?\n1 - Saque\n2 - Depósito");
    valor = parseFloat(prompt("Digite o valor: "));


    if (valor <= 0) {
        console.log("Valor inválido.");
    } else if (opcao == "1") {
        if (valor > saldoTotal) {
            console.log("Saldo insuficiente.");
        } else {
            saldoTotal -= valor;
        }
    } else if (opcao == "2") {
        saldoTotal += valor;
    } else {
        console.log("Opção inválida.");
        continue;
    }

    qtdeOperacoes++;
    somaValores += valor;

    if (valor > maiorValor) {
        maiorValor = valor;
    }

    console.log("Saldo total: R$ " + saldoTotal.toFixed(2));

    continuar = prompt("Deseja continuar? (S/N)").toUpperCase();
}

if (qtdeOperacoes > 0) {
    mediaValores = somaValores / qtdeOperacoes;
}

console.log("Saldo total: R$ " + saldoTotal.toFixed(2));
console.log("Maior valor: R$ " + maiorValor.toFixed(2));
console.log("Média dos valores: R$ " + mediaValores.toFixed(2));

/*
Nesse algoritmo, o nome e o CPF do cliente são solicitados inicialmente. Em seguida, o programa oferece a opção de saque ou depósito e solicita um valor. Caso a opção escolhida seja saque e o valor informado seja maior que o saldo total ou menor ou igual a zero, é exibida uma mensagem de erro e o usuário é solicitado a informar um novo valor. Caso a opção escolhida seja depósito e o valor informado seja menor ou igual a zero, é exibida uma mensagem de erro e o usuário é solicitado a informar um novo valor. Se tudo estiver correto, o valor é adicionado ou removido do saldo total.

O programa também armazena algumas informações, como a quantidade de operações realizadas, o maior valor inserido e a soma dos valores inseridos. A cada iteração, o usuário é perguntado se deseja continuar, e o loop continua enquanto a resposta for "S".

Por fim, o programa exibe o saldo total, o maior valor inserido e a média dos valores inseridos. Todas as informações são exibidas com duas casas decimais, usando o método toFixed().
*/