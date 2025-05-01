const prompt = require("prompt-sync")();

const numero = Number(prompt("Por favor, insira um número: "));

if (numero % 2 === 0) {
  console.log(`O número ${numero} é par.`);
} else {
  console.log(`O número ${numero} é ímpar.`);
}
