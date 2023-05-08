// 1.1

// Recebe o número inteiro e positivo informado pelo usuário
let numero = Number(prompt("Informe um número inteiro e positivo:")); // o método Number() é semelhante ao parseInt(), ele conver o valor recebido para o tipo number

// Inicializa o contador em zero
let contador = 0;

// Utiliza a estrutura de repetição WHILE para contar de zero até o número informado
while (contador <= numero) {
  // Exibe o valor do contador no console
  console.log(contador);

  // Incrementa o contador
  contador++;
}

// 1.2

// Inicializa o contador em zero
contador = 0; // Defino o valor de contador para zero, pois, ele foi usado no código acima então preciso definir para o valor inicial

// Utiliza a estrutura de repetição WHILE para contar de zero até 50 de 5 em 5
while (contador <= 50) {
  // Exibe o valor do contador no console
  console.log(contador);

  // Incrementa o contador em 5
  contador += 5;
}

// Exibe uma mensagem de fim de contagem no console
console.log("Fim!");

// 1.3

// Inicializa o contador em 50
contador = 50; // Para exibir a contagem na ordem inversa, podemos modificar o valor inicial do contador para 50 e decrementá-lo em 5 a cada iteração do loop

// Utiliza a estrutura de repetição WHILE para contar de 50 até 0 de 5 em 5
while (contador >= 0) {
  // Exibe o valor do contador no console
  console.log(contador);

  // Decrementa o contador em 5
  contador -= 5;
}

// Exibe uma mensagem de fim de contagem no console
console.log("Fim!");

// 1.4

// Inicializa as variáveis de controle
let somaNotas = 0;
let contadorNotas = 0;
let contadorHomens = 0;
let contadorMulheresAcimaSete = 0;
let maiorNotaHomens = 0;
let continuar = true

// Utiliza a estrutura de repetição WHILE para receber as notas dos alunos
while (continuar) {
  // Recebe a nota do aluno
  let nota = Number(prompt("Digite a nota do aluno (entre 0 e 10):"));

  // Valida a nota digitada
  if (nota < 0 || nota > 10) {
    alert("Nota inválida! Digite uma nota entre 0 e 10.");
    continue;
  }

  // Recebe o sexo do aluno
  let sexo = prompt("Digite o sexo do aluno (M ou F):");

  // Valida o sexo digitado
  if (sexo !== "M" && sexo !== "F") {
    alert("Sexo inválido! Digite M para masculino ou F para feminino.");
    continue;
  }

  // Calcula a soma das notas
  somaNotas += nota;

  // Incrementa o contador de notas
  contadorNotas++;

  // Verifica se o aluno é homem
  if (sexo === "M") {
    // Incrementa o contador de homens
    contadorHomens++;

    // Verifica se a nota é maior do que a maior nota entre os homens
    if (nota > maiorNotaHomens) {
      maiorNotaHomens = nota;
    }
  } else {
    // Verifica se a nota é acima de 7
    if (nota > 7) {
      // Incrementa o contador de mulheres com nota acima de 7
      contadorMulheresAcimaSete++;
    }
  }

  // Pergunta ao usuário se deseja cadastrar outra nota
  let resposta = prompt("Deseja cadastrar outra nota? (S/N)");

  // Verifica se o usuário deseja cadastrar outra nota
  if (resposta !== "S") {
    continuar = false
  }
}

// Calcula a média geral das notas
let mediaGeral = somaNotas / contadorNotas;

// Exibe os resultados no console
console.log(`Média geral dos alunos: ${mediaGeral.toFixed(2)}`);
console.log(`Quantidade de homens que enviaram as notas: ${contadorHomens}`);
console.log(`Quantidade de mulheres com nota acima de 7: ${contadorMulheresAcimaSete}`);
console.log(`Maior nota entre os homens: ${maiorNotaHomens}`);

// 1.5

let i = 0;
while (i < 5) {
    let num = parseInt(prompt("Digite um número: "));
    let j = num + 1;
    while (j <= num + 5) {
        console.log(num + " x " + j + " = " + num * j);
        j++;
    }
    i++;
}

/*
Nesse algoritmo, a cada iteração do primeiro laço WHILE, o usuário é solicitado a digitar um número e, em seguida, é feita uma contagem com o segundo laço WHILE, multiplicando esse número pelos próximos 5 números em sequência e exibindo o resultado no console. O processo é repetido para os 5 números digitados pelo usuário.
*/