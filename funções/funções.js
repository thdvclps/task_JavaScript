// 1. Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.
function parOuImpar(numero) {
    if (parseInt(numero) % 2 === 0) {
      console.log("O número " + numero + " é par");
    } else {
      console.log("O número " + numero + " é ímpar");
    }
  }
  parOuImpar(10);
  parOuImpar("3");
  parOuImpar(5);
  
// 2. Crie uma função que receba dois números e retorne o resultado da soma entre eles
  
  function soma(num1, num2) {
    return parseInt(num1) + parseInt(num2);
  }
  let resultado = soma(3, 7);
  console.log("A soma dos dois números é: " + resultado);
  
// 3. Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
  // negativo(1) // return -1
  // negativo(-5) // return 5
  
  function oposto(numero) {
    if (parseInt(numero) > 0) {
      return (numero += -2 * numero);
    } else {
      return (numero -= 2 * numero);
    }
  }
  console.log(oposto(2));
  console.log(oposto(-20));
  console.log(oposto(0));
  
// 4. Crie uma função que receba um array de números, e retorne a soma de todos os números positivos desse array. Exemplos de retornos:
  // somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20
  function soma_positivos(numeros) {
    let soma = 0;
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) > 0) {
        soma += parseInt(numeros[i]);
      }
    }
  return ("A soma dos números é: " + soma);
  }
  console.log(soma_positivos([1, -4, 7, 12]));
  
// 5. Dado um array de números inteiros, crie uma função que retorne o valor do menor número desse array. Exemplos de outputs:
  // Dado [34, 15, 88, -2] sua solução deve retornar o -2
  // Dado [34, -500, -1, 100] sua solução deve retornar o -500
  function menor_numero(numeros){
    let menor = numeros[0];
    for (i = 0; i < 4; i++) {
      if (parseInt(numeros[i]) < menor) {
        menor = parseInt(numeros[i]);
      }
    }
    return ("O menor número do array é: " + menor);
  }
  console.log(menor_numero([34, 15, 88, -2]));
  console.log(menor_numero([34, -500, -1, 100]));
  
  // BONUS: crie uma função com as 4 operaç matemáticas básicas
  
    function operacoes(num1, num2) {
    console.log("soma: " + (parseInt(num1) + parseInt(num2)));
    console.log("subtração: " + (parseInt(num1) - parseInt(num2)));
    console.log("multiplicação: " + parseInt(num1) * parseInt(num2));
    console.log("divisão: " + parseInt(num1) / parseInt(num2));
  }
  operacoes(10, 20);