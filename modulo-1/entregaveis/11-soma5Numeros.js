const prompt = require("prompt-sync")();

let numeros = [];

for (let i = 0; i < 5; i++) {
  let numero = Number(prompt(`Informe o número ${i + 1}: `));
  numeros.push(numero);
}

const soma = numeros.reduce((acc, num) => acc + num, 0);

console.log(`A soma total é: ${soma}`);
