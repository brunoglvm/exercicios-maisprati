const prompt = require("prompt-sync")();

const idade = Number(prompt("Informe sua idade: "));

let faixaEtaria;

if (idade < 0) {
  faixaEtaria = "inválida";
} else if (idade >= 60) {
  faixaEtaria = "idoso";
} else if (idade >= 18) {
  faixaEtaria = "adulto";
} else if (idade >= 13) {
  faixaEtaria = "adolescente";
} else {
  faixaEtaria = "criança";
}

switch (faixaEtaria) {
  case "inválida":
    console.log(
      `A idade ${idade} é inválida. Por favor, informe um valor positivo.`
    );
    break;

  case "idoso":
    console.log(`Você tem ${idade} anos e está na faixa etária: idoso`);
    break;

  case "adulto":
    console.log(`Você tem ${idade} anos e está na faixa etária: adulto`);
    break;

  case "adolescente":
    console.log(`Você tem ${idade} anos e está na faixa etária: adolescente`);
    break;

  case "criança":
    console.log(`Você tem ${idade} anos e está na faixa etária: criança`);
    break;
}
