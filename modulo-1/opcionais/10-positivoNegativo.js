const prompt = require("prompt-sync")();

let numero;

do {
  numero = Number(
    prompt("Informe um número para verificarmos se é positivo ou negativo: ")
  );

  if (numero > 0) {
    console.log(`O número informado (${numero}) é positivo.`);
  } else if (numero < 0) {
    console.log(`O número informado (${numero}) é negativo.`);
  }
} while (numero !== 0);
