let matriz = [];
let somaDiagonalPrincipal = 0;
let somaDiagonalSecundaria = 0;

for (let i = 0; i < 3; i++) {
  matriz[i] = [];

  for (let j = 0; j < 3; j++) {
    matriz[i][j] = Math.floor(Math.random() * 100);

    // soma da diagonal principal
    if (i === j) {
      somaDiagonalPrincipal += matriz[i][j];
    }

    // soma da diagonal secundária
    if (i + j === 3 - 1) {
      somaDiagonalSecundaria += matriz[i][j];
    }
  }
}

console.table(matriz);
console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("Soma da diagonal secundária:", somaDiagonalSecundaria);
