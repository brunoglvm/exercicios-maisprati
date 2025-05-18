// Inverter
function reverseString(str) {
  // return str.split("").reverse().join("");

  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("test"));

// Quantidade de Vogais
function countVowels(str) {
  let vowels = str.match(/[aeiouáéíóúâêîôûãõàèìòùäëïöü]/gi);
  return vowels ? vowels.length : 0;
}
console.log(countVowels("test"));
