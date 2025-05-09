const prompt = require("prompt-sync")();

let opcao = prompt(
  "Informe o tipo de operação (ex: soma, subtração, multiplicação, divisão): "
)
  .trim()
  .toLowerCase();
let num = Number(prompt("Informe o número que deseja para a tabuada: "));

switch (opcao) {
  case "soma":
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} + ${i} = ${num + i}`);
    }
    break;

  case "subtração":
  case "subtracao":
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} - ${i} = ${num - i}`);
    }
    break;

  case "multiplicação":
  case "multiplicacao":
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} x ${i} = ${num * i}`);
    }
    break;

  case "divisão":
  case "divisao":
    for (let i = 1; i <= 10; i++) {
      console.log(`${num} ÷ ${i} = ${(num / i).toFixed(2)}`);
    }
    break;

  default:
    console.log("Operação inválida.");
}
