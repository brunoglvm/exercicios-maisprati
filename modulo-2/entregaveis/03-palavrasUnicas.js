const prompt = require("prompt-sync")();

const texto = prompt("Digite um texto: ");

function palavrasUnicas(texto) {
  const palavras = texto.split(/\W+/);
  const unicas = [];

  for (let i = 0; i < palavras.length; i++) {
    const palavra = palavras[i];
    if (palavra && !unicas.includes(palavra)) {
      unicas.push(palavra);
    }
  }

  return unicas;
}

const resultado = palavrasUnicas(texto);
console.log("Palavras únicas:", resultado);
