// 1. Faça um Programa que peça dois números e imprima o maior deles.
let numero5 = parseInt(prompt("Digite o primeiro número"));
let numero6 = parseInt(prompt("Digite o segundo número"));
if (numero5 > numero6) {
  console.log("O número " + numero5 + " É o maior entre os dois");
} else if (numero6 > numero5) {
  console.log("O número " + numero6 + " É o maior entre os dois");
} else {
  console.log("Os dois números são iguais");
}

// 2. Faça um Programa que peça um valor e mostre na tela se o valor é positivo ou negativo.
let numero4 = parseInt(prompt("Digite um numero"));
if (numero4 >= 0) {
  console.log("O número " + numero3 + " é positivo");
} else {
  console.log("O número " + numero3 + " é negativo");
}

// 3. Faça um Programa que verifique se uma letra digitada é "F" ou "M". Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
let sexo = prompt("Digite seu sexo:").toUpperCase();
if (sexo === "F") {
  // <--- if (sexo === "F" || sexo === "f")
  console.log("Seu sexo é feminino");
} else if (sexo === "M") {
  // <--- if (sexo === "M" || sexo === "m")
  console.log("Seu sexo é masculino");
} else {
  console.log("Sexo inválido");
}

// 4. Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:
    //- A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
    //- A mensagem "Reprovado", se a média for menor do que sete;
    //- A mensagem "Aprovado com Distinção", se a média for igual a dez.
let nota3 = parseFloat(prompt("Digite a primeira nota"));
let nota4 = parseFloat(prompt("Digite a segunda nota"));
let media = (nota3 + nota4) / 2;
if (media == 10) {
  console.log("Sua média é: " + media + ", Aprovado com Distinção");
} else if (media >= 7) {
  console.log("Sua média é: " + media + ", Aprovado");
} else {
  console.log("Sua média é: " + media + ", Reprovado");
}

// 5. Faça um Programa que leia três números e mostre o maior e o menor deles.
let numero7 = parseInt(prompt("Digite o primeiro número"));
let numero8 = parseInt(prompt("Digite o segundo número"));
let numero9 = parseInt(prompt("Digite o terceiro número"));
if (numero7 > numero8 && numero7 > numero9) {
  console.log("O número " + numero7 + " é o maior entre os três");
} else if (numero8 > numero7 && numero8 > numero9) {
  console.log("O número " + numero8 + " é o maior entre os três");
} else if (numero9 > numero7 && numero9 > numero8) {
  console.log("O número " + numero9 + " é o maior entre os três");
} else {
  console.log("Os três números são iguais");
}

// 6. Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
let numero10 = parseInt(prompt("Digite o primeiro número"));
let numero11 = parseInt(prompt("Digite o segundo número"));
if (numero10 % 2 === 0 && numero11 % 2 === 0) {
  console.log("Os números " + numero10 + " e " + numero11 + " são pares");
} else if (numero10 % 2 === 0 && numero11 % 2 !== 0){
    console.log("O número " + numero10 + " é par e o número " + numero11 + " é ímpar");
} else if (numero10 % 2 !== 0 && numero11 % 2 === 0){
    console.log("O número " + numero10 + " é ímpar e o número " + numero11 + " é par");
} else {
  console.log("Os dois números são ímpares");
}