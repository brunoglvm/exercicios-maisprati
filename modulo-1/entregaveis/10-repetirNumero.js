const prompt = require("prompt-sync")();

let num = Number(prompt("Informe um número: "));

for (let i = 1; i <= 10; i++) {
  console.log(`${i}: ${num}`);
}
