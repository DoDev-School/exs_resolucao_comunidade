// 1

// solicitar o nome e idade do usuário e salvar em variáveis
var name
var age

name = prompt("Digite seu nome")
age = prompt("Digite sua idade")

// calcular o ano que o usuario nasceu com base em sua idade, considerando o ano atual como 2022
var yearOfBirth = 2023 - age

//verificar se a idade/ano em que nasceu é um número par ou impar
var ageInfo
var yearInfo

if (age % 2 == 1) {
    ageInfo = "impar"
} else {
    ageInfo = "par"
}

if (yearOfBirth % 2 == 1) {
    yearInfo = "impar"
} else {
    yearInfo = "par"
}

// exibir as informações recebidas no console
console.log("Olá " + name + ", voce tem " + age + " anos que é um número " + ageInfo + " e nasceu no ano de " + yearOfBirth + " que é um número " + yearInfo)

// exibir ao usuario que se for maior de idade esta liberado o consumo de bebida alcoólica 
if (age >= 18) {
    console.log("Esta liberado o consumo de bebidas alcoólicas")
}

// 2

// solicitar o valor que o usuario quer decompor
var value = parseInt(prompt("Digite o valor que deseja decompor")) //a função parseInt() faz com que o tipo da informação recebida seja um número e não um texto
var bankNote
console.log("Valor R$" + value)
// fazer a decomposição
bankNote = parseInt(value / 100) //primeiro calcula quantas notas desse valor é possível obter com o saldo atual
console.log(bankNote + " nota(s) de 100") // exibir no console o numero de notas
value = value - (bankNote * 100) // subtrair o valor já decomposto do total

bankNote = parseInt(value / 50)
console.log(bankNote + " nota(s) de 50")
value = value - (bankNote * 50)

bankNote = parseInt(value / 10)
console.log(bankNote + " nota(s) de 10")
value = value - (bankNote * 10)

bankNote = parseInt(value / 5)
console.log(bankNote + " nota(s) de 5")
value = value - (bankNote * 5)

console.log(value + " nota(s) de 1")
