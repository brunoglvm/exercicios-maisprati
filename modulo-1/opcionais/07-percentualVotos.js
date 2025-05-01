const prompt = require("prompt-sync")();

const totalEleitores = Number(prompt("Informe o número total de eleitores: "));
const votosEmBranco = Number(prompt("Informe o número de votos em branco: "));
const votosNulo = Number(prompt("Informe o número de votos nulos: "));
const votosValidos = Number(prompt("Informe o número de votos válidos: "));

console.log(
  `Percentual de votos em branco: ${(
    (votosEmBranco / totalEleitores) *
    100
  ).toFixed(2)}%`
);
console.log(
  `Percentual de votos nulos: ${((votosNulo / totalEleitores) * 100).toFixed(
    2
  )}%`
);
console.log(
  `Percentual de votos válidos: ${(
    (votosValidos / totalEleitores) *
    100
  ).toFixed(2)}%`
);
