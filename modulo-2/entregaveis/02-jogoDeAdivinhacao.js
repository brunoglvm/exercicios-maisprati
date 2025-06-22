const prompt = require("prompt-sync")();

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;
let palpite;

console.log("Tente adivinhar o número entre 1 e 100. Digite 0 para desistir.");

while (true) {
  tentativas++;
  palpite = Number(prompt("Seu palpite: "));

  if (palpite === 0) {
    console.log("Você desistiu.");
    break;
  } else if (palpite === numeroAleatorio) {
    console.log(
      `Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`
    );
    break;
  }

  if (palpite < numeroAleatorio) {
    console.log("Tente um número maior.");
  } else if (palpite > numeroAleatorio) {
    console.log("Tente um número menor.");
  }
}
