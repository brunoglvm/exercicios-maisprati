const prompt = require("prompt-sync")();

const quantidadeMacas = Number(prompt("Quantas maças você vai comprar? "));
let precoTotal;

if (quantidadeMacas < 12) {
  precoTotal = 0.3 * quantidadeMacas;
} else {
  precoTotal = 0.25 * quantidadeMacas;
}

console.log(`Quantidade de maçãs: ${quantidadeMacas}`);
console.log(
  `Valor total da compra: R$ ${precoTotal.toFixed(2).replace(".", ",")}`
);
