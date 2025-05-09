const prompt = require("prompt-sync")();

const numero = Number(prompt("Informe um número inteiro: "));

if (isNaN(numero) || numero < 0 || !Number.isInteger(numero)) {
  console.log("Insira um número inteiro não negativo.");
} else {
  let fatorial = 1;

  for (let i = 1; i <= numero; i++) {
    fatorial *= i;
  }

  console.log(`O fatorial de ${numero} é: ${fatorial}`);
}
