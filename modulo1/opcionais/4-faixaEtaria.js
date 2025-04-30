const prompt = require("prompt-sync")();

const idade = Number(prompt("Quantos anos você tem?"));

let faixaEtaria;

if (idade < 0) {
  faixaEtaria = "inválida";
} else if (idade >= 18) {
  faixaEtaria = "adulto";
} else if (idade >= 13) {
  faixaEtaria = "adolescente";
} else {
  faixaEtaria = "criança";
}

switch (faixaEtaria) {
  case "inválida":
    console.log("Idade inválida. Por favor, insira um número positivo.");
    break;
  case "adulto":
    console.log("Você está na faixa etária de adulto.");
    break;
  case "adolescente":
    console.log("Você está na faixa etária de adolescente.");
    break;
  case "criança":
    console.log("Você está na faixa etária de criança.");
    break;
}
