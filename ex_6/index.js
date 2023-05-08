// 1.1

let nome = prompt("Digite seu nome:");
let idade = prompt("Digite sua idade:");
let peso = parseFloat(prompt("Digite seu peso (em kg):"));
let altura = parseFloat(prompt("Digite sua altura (em metros):"));
let profissao = prompt("Digite sua profissão:");

let alturaM = parseFloat(altura).toFixed(2);

console.log(`Olá ${nome}, você tem ${idade} anos, é ${profissao}, tem ${alturaM}M de altura e pesa ${peso}kg.`);

/* Primeiramente, utilizamos a função prompt para coletar as informações do usuário. Em seguida, utilizamos a função parseFloat para converter a altura de string para número decimal, e a função toFixed para limitar o número de casas decimais a 2. Por fim, exibimos o texto formatado no console usando template literals, que em vez de utilizar aspas simples ou duplas para criar uma string, utilizamos crases ( ), que permitem incluir variáveis ou expressões diretamente na string, envolvendo-as com chaves ${}. Por exemplo: `${variavel}`
*/

// 1.2

if (idade >= 18) {
    console.log(`Está liberado para tomar umas geladas!`);
  } else {
    console.log(`Sem gelada para você!`);
  }

  /* Note que a condição idade >= 18 é usada para verificar se o usuário é maior de idade. Caso seja verdadeira, a mensagem "Está liberado para tomar umas geladas!" é exibida junto com as informações do usuário. Caso contrário, a mensagem "Sem gelada para você!" é exibida. */


// 1.3

let meses = idade * 12;
let semanas = idade * 52;
let dias = idade * 365;

console.log(`Sua idade em meses é: ${meses}`);
console.log(`Sua idade em semanas é: ${semanas}`);
console.log(`Sua idade em dias é: ${dias}`);

// 1.4

// calculando o IMC
let imc = peso / (altura * altura);

// exibindo o resultado do IMC
console.log("Seu IMC é: " + imc.toFixed(2));

// verificando a faixa correspondente
if (imc < 18.5) {
  console.log("Você está na faixa de Magreza.");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Você está na faixa Normal.");
} else if (imc >= 25 && imc <= 30) {
  console.log("Você está na faixa de Sobrepeso.");
} else {
  console.log("Você está na faixa de Obesidade.");
}
