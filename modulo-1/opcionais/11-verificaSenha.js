const prompt = require("prompt-sync")();

let senha;

do {
  senha = Number(prompt("Informe a senha: "));

  if (senha !== 2807) {
    console.log("SENHA INVÁLIDA");
  }
} while (senha !== 2807);
console.log("ACESSO PERMITIDO");
