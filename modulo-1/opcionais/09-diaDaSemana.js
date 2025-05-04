const prompt = require("prompt-sync")();

const diaDaSemana = prompt("Insira o dia da semana: ").trim().toLowerCase();

switch (diaDaSemana) {
  case "segunda":
  case "terça":
  case "quarta":
  case "quinta":
  case "sexta":
    console.log("Dia útil");
    break;
  case "sábado":
  case "domingo":
    console.log("Final de semana");
    break;
  default:
    console.log("Dia inválido. Insira um dia da semana válido.");
}
