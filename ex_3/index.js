// 1.1

var number = parseInt(prompt("Digite um número"))

for (let index = 0; index <= number; index++) {
    console.log(index)
}

// 1.2

for (let index = 0; index <= 50; index += 5) {
    //index = index + 5     se colocar index++ na declaração do do for precisa fazer esse incremento dentro do loop
    console.log(index)
}

// 1.3

for (let index = 50; index <= 0; index -= 5) {
    //index = index - 5     se colocar index++ na declaração do do for precisa fazer esse incremento dentro do loop
    console.log(index)
}

// 1.4

var average = 0
var manScoreAmount = 0
var womanScoreAmount = 0
var manHighestScore = 0

for (let index = 0; index < 10; index++) {
    var score = parseInt(prompt("Digite a nota")) //a função parseInt() faz com que o tipo da informação recebida seja um número e não um texto
    var gender = prompt("Qual o sexo? 1 - Masculino / 2 - Feminino")

    average = average + score // somando todas as notas na variável média

    if (gender == "1") { // if para verificar se a nota inserida foi de uma pessoa do sexo masculino
        manScoreAmount++ // se for verdadeiro é incrementado em 1 a quantidade de homens que enviaram a nota
        if (score > manHighestScore) { // if para verificar se a nota inserida é maior que a maior nota atual, se for é substítuido o valor
            manHighestScore = score
        }
    } else if (score > 7) { // esse else é caso seja do sexo feminino, e já verifica se a nota foi maior que 7 
        womanScoreAmount++ // incremento na quantida de mulheres com nota acima de 7
    }
}

console.log("A média geral das notas é " + average / 10 + ", um total de " + manScoreAmount + " homen(s) enviaram suas notas e a mais alta foi " + manHighestScore + ", e o número de mulheres com nota acima de 7 foi " + womanScoreAmount + " mulher(es)")

// 1.5

// Loop para iterar sobre cada um dos 5 números informados
for (let i = 1; i <= 5; i++) {
    // Recebe o número informado pelo usuário através do prompt de comando
    let numero = parseInt(prompt("Informe o " + i + "º número: "));

    // Loop para iterar sobre os próximos 5 números em sequência ao número informado
    for (let j = 1; j <= 5; j++) {
        // Calcula o resultado da multiplicação do número informado pelo número em sequência
        let resultado = numero * (numero + j);

        // Exibe o resultado da multiplicação no console
        console.log(`${numero} x ${numero + j} = ${resultado}`);
    }
}
