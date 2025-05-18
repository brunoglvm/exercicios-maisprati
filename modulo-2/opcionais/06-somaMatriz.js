const matrizes = {
  a: [
    [1, 2],
    [3, 4],
  ],
  b: [
    [5, 6],
    [7, 8],
  ],
};

const resultado = [];

for (let i = 0; i < matrizes.a.length; i++) {
  resultado[i] = [];
  for (let j = 0; j < matrizes.a[i].length; j++) {
    resultado[i][j] = matrizes.a[i][j] + matrizes.b[i][j];
  }
}

console.log("Resultado da soma das matrizes:");
console.log(resultado);
