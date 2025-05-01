const prompt = require("prompt-sync")();

const turmaC = 60;
const turmaD = 20;

const percentualReprovadosC = Number(
  prompt("Insira o percentual de alunos reprovados na turma C: ")
);
const percentualAprovadosD = Number(
  prompt("Insira o percentual de alunos aprovados na turma D: ")
);

console.log(
  `Quantidade de alunos reprovados na turma C: ${
    (turmaC * percentualReprovadosC) / 100
  }`
);

console.log(
  `Quantidade de alunos reprovados na turma D: ${
    ((100 - percentualAprovadosD) * turmaD) / 100
  }`
);
