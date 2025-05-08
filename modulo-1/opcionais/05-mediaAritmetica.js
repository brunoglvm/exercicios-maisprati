const prompt = require("prompt-sync")();

let numeros;
let soma = 0;
let quantidadeDeValores = 0;

do {
  numeros = Number(
    prompt(
      "Digite os números para calcularmos a média aritmética! (Digite 0 para sair) "
    )
  );
  if (numeros !== 0) {
    quantidadeDeValores++;
    soma += numeros;
  }
} while (numeros !== 0);

if (quantidadeDeValores === 0) {
  console.log("Nenhum número válido foi informado.");
} else {
  console.log(`A média aritmética é: ${soma / quantidadeDeValores}`);
}
