const prompt = require("prompt-sync")();

const celsius = Number(prompt("Por favor, insira a temperatura em Celsius:"));

const fahrenheit = celsius * 1.8 + 32;

console.log(`A temperatura em Fahrenheit é: ${fahrenheit.toFixed(1)}`);
