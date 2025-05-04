const prompt = require("prompt-sync")();

const turmaC = 60;
const turmaD = 20;

const percentualReprovadosC = Number(
  prompt("Insira o percentual de alunos reprovados na turma C: ")
);
const percentualAprovadosD = Number(
  prompt("Insira o percentual de alunos aprovados na turma D: ")
);

const alunosReprovadosC = (turmaC * percentualReprovadosC) / 100;
const alunosReprovadosD = ((100 - percentualAprovadosD) * turmaD) / 100;

const totalAlunos = turmaC + turmaD;
const percentualTotalReprovados =
  ((alunosReprovadosC + alunosReprovadosD) / totalAlunos) * 100;

console.log(
  `Quantidade de alunos reprovados na turma C: ${alunosReprovadosC.toFixed(1)}`
);
console.log(
  `Quantidade de alunos reprovados na turma D: ${alunosReprovadosD.toFixed(1)}`
);

console.log(
  `Percentual de alunos reprovados em relação ao total de alunos: ${percentualTotalReprovados.toFixed(
    1
  )}`
);
