const professor = {
  nome: "Stark Parker",
  materia: "Fisica",
  notas: {
    aluno1: [5, 2],
    aluno2: [3, 7],
    aluno3: [8, 4],
  },
};

let soma = 0;
let totalNotas = 0;

for (let aluno in professor.notas) {
  let notas = professor.notas[aluno];
  soma += notas.reduce((acc, val) => acc + val, 0);
  totalNotas += notas.length;
}

const media = soma / totalNotas;
console.log(`Média da turma: ${media.toFixed(1)}`);

if (media < 6) {
  console.log("A turma está abaixo da média.");
} else {
  console.log("A turma está na média.");
}
