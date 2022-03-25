// 1. Faça um Programa que leia um vetor de 5 números inteiros e mostre-os.
let minhaLista = [1, 5, 3, 2, 10];
for (let i = 0; i < minhaLista.length; i++) {
  console.log(minhaLista[i]);
}

// 2. Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.
var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var inverso = [];
for (let i = numeros.length - 1; i >= 0; i--) {
  inverso.push(numeros[i]);
}
console.log(inverso);

// 3. Faça um Programa que leia 4 notas, mostre as notas e a média na tela.
var notas = [];
var soma = 0;
var media = 0;
for (let i = 0; i < 4; i++) {
  notas.push(parseFloat(prompt("Digite uma nota")));
  soma += notas[i];
}
media = soma / 4;
alert("As notas são: " + notas + " e a média das notas é: " + media);

// 4. Faça um Programa que leia um vetor de 10 caracteres, e diga quantas consoantes foram lidas. Imprima as consoantes.
// 5. Faça um Programa que leia 20 números inteiros e armazene-os num vetor. Armazene os números pares no vetor PAR e os números IMPARES no vetor ímpar. Imprima os três vetores.
var pares = []
var impares = []
var inteiros = []
for(let i = 0; i < 20; i++){

  inteiros.push(parseInt(prompt("Digite um número")))
  if(inteiros[i] % 2 === 0){
    pares.push(inteiros[i])
  } else{
    impares.push(inteiros[i])
  }
}
console.log("Vetor original: " + inteiros)
console.log("Vetor pares: " + pares)
console.log("Vetor impares3: " + impares)
// 6. Faça um Programa que peça as quatro notas de 10 alunos, calcule e armazene num vetor a média de cada aluno, imprima o número de alunos com média maior ou igual a 7.0.
// 7. Faça um Programa que leia um vetor de 5 números inteiros, mostre a soma, a multiplicação e os números.
var vetor = [1, 2, 3, 4, 5]
var soma = 0;
var multiplicacao = 1;
for (let i = 0; i < vetor.length; i++){
    soma += vetor[i]
    multiplicacao *= vetor[i]
}
console.log("A soma dos números do vetor é: " + soma)
console.log("A multiplicação dos números do vetor é: " + multiplicacao)
console.log("Os números do vetor são: " + vetor)
// 8. Faça um Programa que peça a idade e a altura de 5 pessoas, armazene cada informação no seu respectivo vetor. Imprima a idade e a altura na ordem inversa a ordem lida.
// 9. Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie uma dessas pessoas para pagar o churrasco// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} foi sorteada para pagar o churrasco!”
var nomes = [];
var i = 0;
while (true) {
  nomes.push(prompt("Digite um nome ou 0 para parar"));
  if (parseInt(nomes[i]) === 0) {
    nomes.pop(nomes[i]);
    break;
  }
  i++;
}
i = Math.floor(Math.random() * nomes.length);
console.log(nomes[i] + " foi sorteada para pagar o churrasco!");

// 10. Cria um script que receba o nome de várias pessoas até o usuário desejar parar o programa, bote o nome dessas pessoas em uma lista e sorteie duas dessas pessoas para te dar um presente.
// As pessoas não podem ser repetidas.
// O output do código deve ter o seguinte formato:
// “{nomeDaPessoa} e { nomeDaOutra } foram sorteados para te dar um presente!”
var nomesPresente = [];
var i = 0;
let num1 = 0
let num2 = 0
while (true) {
  nomesPresente.push(prompt("Digite um nome ou 0 para parar"));
  if (parseInt(nomesPresente[i]) === 0) {
    nomesPresente.pop(nomesPresente[i]);
    break;
  }
  i++;
}
num1 = Math.floor(Math.random() * nomesPresente.length);
nomesPresente.pop(nomesPresente[num1]);
num2 = Math.floor(Math.random() * nomesPresente.length);
console.log(nomesPresente[num1] + " e "+ nomesPresente[num2] + " foram sorteados para te dar um presente!");