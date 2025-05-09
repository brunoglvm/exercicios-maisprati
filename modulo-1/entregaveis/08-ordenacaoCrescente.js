const prompt = require("prompt-sync")();

let val1 = Number(prompt("Qual valor 1? "));
let val2 = Number(prompt("Qual valor 2? "));

if (val1 === val2) {
  console.log("Os valores não podem ser iguais.");
} else if (val1 > val2) {
  console.log(`Os valores em ordem crescente são: ${val2}, ${val1}`);
} else {
  console.log(`Os valores em ordem crescente são: ${val1}, ${val2}`);
}
