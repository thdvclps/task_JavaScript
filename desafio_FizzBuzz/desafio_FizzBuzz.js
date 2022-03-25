// Dado um número n, para cada número entre 0 e 100, imprime um valor por linha da seguinte maneira:
// Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
// Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
// Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
// Se i não for múltiplo de 3 ou 5, imprima o valor de i.
for (let i = 0; i <= 100; i++) {

if (i % 3 == 0 && i % 5 == 0 && i != 0) {
    console.log(i + " - FizzBuzz");
} else if (i % 3 == 0 && i != 0) {
console.log(i + " - Fizz");
} else if (i % 5 == 0 && i != 0) {
console.log(i + " - Buzz");
} else {
console.log(i);
 }
}