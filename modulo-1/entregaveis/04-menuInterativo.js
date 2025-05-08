const prompt = require("prompt-sync")();

let opcao;

do {
  opcao = Number(
    prompt(
      "1 - Ver data atual\n2 - Ver hora atual\n3 - Ver data e hora atual\n0 - Sair\n\nEscolha uma opção: "
    )
  );

  switch (opcao) {
    case 1:
      console.log("Data atual:", new Date().toLocaleDateString("pt-BR"));
      break;

    case 2:
      console.log("Hora atual:", new Date().toLocaleTimeString("pt-BR"));
      break;

    case 3:
      console.log("Data e hora atual:", new Date().toLocaleString("pt-BR"));
      break;

    case 0:
      console.log("Finalizando...");
      break;

    default:
      console.log("Opção inválida.");
  }
} while (opcao !== 0);
console.log("Programa finalizado.");
