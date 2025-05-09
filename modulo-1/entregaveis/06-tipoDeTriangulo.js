const prompt = require("prompt-sync")();

let ladoA = Number(prompt("Informe o valor do lado A do triângulo: "));
let ladoB = Number(prompt("Informe o valor do lado B do triângulo: "));
let ladoC = Number(prompt("Informe o valor do lado C do triângulo: "));

const formaTriangulo =
  ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB;

// verifica se os lados fornecidos formam um triângulo
if (formaTriangulo) {
  console.log("Os lados formam um triângulo.");

  // verifica o tipo de triângulo
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Tipo: Triângulo equilátero."); // possui todos os lados iguais
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Tipo: Triângulo isósceles."); // possui dois lados iguais
  } else {
    console.log("Tipo: Triângulo escaleno."); // possui todos os lados diferentes
  }
} else {
  console.log("Os lados não formam um triângulo.");
}
