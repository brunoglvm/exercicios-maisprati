const prompt = require("prompt-sync")();

const peso = Number(prompt("Informe seu peso em kg: ").replace(",", "."));
const altura = Number(
  prompt("Informe sua altura em metros: ").replace(",", ".")
);

const imc = peso / (altura * altura);

console.log(`IMC: ${imc.toFixed(2).replace(".", ",")}`);

if (imc < 18.5) {
  console.log("Categoria: Baixo peso");
} else if (imc >= 18.5 && imc < 24.9) {
  console.log("Categoria: Peso normal");
} else if (imc >= 25 && imc < 29.9) {
  console.log("Categoria: Sobrepeso");
} else {
  console.log("Categoria: Obesidade");
}
