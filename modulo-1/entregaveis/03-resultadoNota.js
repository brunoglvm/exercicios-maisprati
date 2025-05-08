const prompt = require("prompt-sync")();

const nota = Number(prompt("Informe a sua nota (0 a 10): "));

let resultado;

if (nota > 10 || nota < 0) {
  resultado = "inválido";
} else if (nota >= 6) {
  resultado = "aprovado";
} else if (nota >= 4) {
  resultado = "recuperação";
} else {
  resultado = "reprovado";
}

switch (resultado) {
  case "inválido":
    console.log("Nota inválida! Insira uma nota entre 0 e 10.");
    break;

  case "aprovado":
    console.log(`Parabéns! Você foi aprovado com a nota ${nota}.`);
    break;

  case "recuperação":
    console.log(`Você está em recuperação com a nota ${nota}.`);
    break;

  case "reprovado":
    console.log(`Infelizmente você foi reprovado com a nota ${nota}.`);
    break;
}
