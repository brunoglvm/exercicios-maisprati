const prompt = require("prompt-sync")();

let numeros = [];
let numero;

do {
  numero = Number(prompt("Informe números decimais (digite 0 para sair): "));

  if (isNaN(numero)) {
    console.log("Valor inválido! Por favor, insira um número.");
  } else if (numero !== 0) {
    numeros.push(numero);
  }
} while (numero !== 0);

if (numeros.length === 0) {
  console.log("Nenhum número foi informado.");
} else {
  const soma = numeros.reduce((acc, num) => acc + num, 0);
  const media = soma / numeros.length;

  console.log(
    `A média aritmética dos ${numeros.length} números é: ${media.toFixed(2)}`
  );
}
