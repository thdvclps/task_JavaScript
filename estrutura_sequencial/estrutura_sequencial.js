// 1. Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console
let nome = prompt("Digite seu nome:");
alert("Seu nome é: " + nome);
console.log("Seu nome é: " + nome);

// 2. Crie um script que leia do usuário dois números e mostre a soma desses dois números.
let numero1 = parseInt(prompt("Digite um numero"));
let numero2 = parseInt(prompt("Digite outro numero"));
console.log("A soma dos números é: " + (numero1 + numero2));

// 3. Crie um script que leia duas notas do usuário e calcule a média do aluno.
let nota1 = parseFloat(prompt("Digite a primeira nota"));
let nota2 = parseFloat(prompt("Digite a segunda nota"));
console.log("Sua média é: " + (nota1 + nota2) / 2);

// 4. Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele.
let ano = parseInt(prompt("Digite um numero"));
if (ano % 2 === 0) {
  console.log("O número " + ano + " é par");
} else {
  console.log("O número " + ano + " é impar");
}

// 5. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let por_hora = parseFloat(prompt("Digite o quanto você ganha por hora"));
let horas = parseInt(prompt("Digite a quantidade de horas trabalhadas"));

console.log("O seu salário é: R$" + por_hora * horas);

// 6. Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.
let f = parseFloat(prompt("Digite a temperatura em graus Fahrenheit"));
console.log(f + "º Fahrenheit em Celsius é: " + 5 * ((f - 32) / 9) + "º");