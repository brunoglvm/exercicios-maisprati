const prompt = require("prompt-sync")();

const numero = Number(
  prompt(
    "Informe um número para verificarmos se é positivo, negativo ou zero: "
  )
);

if (numero > 0) {
  console.log(`O número informado (${numero}) é positivo.`);
} else if (numero < 0) {
  console.log(`O número informado (${numero}) é negativo.`);
} else {
  console.log(`O número informado (${numero}) é igual a zero.`);
}
