const prompt = require("prompt-sync")();

const num1 = Number(prompt("Informe o primeiro número!"));
const num2 = Number(prompt("Informe o segundo número!"));

function operacoes(num1, num2) {
  console.log(`Soma: ${num1 + num2}`);
  console.log(`Subtração: ${num1 - num2}`);
  console.log(`Multiplicação: ${num1 * num2}`);

  if (num2 === 0) {
    console.log(`Divisão: Não é possível dividir por zero`);
  } else {
    console.log(`Divisão: ${num1 / num2}`);
  }
}

if (isNaN(num1) || isNaN(num2)) {
  console.log("Por favor, insira números válidos!");
} else {
  operacoes(num1, num2);
}
