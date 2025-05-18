let numbers = [3, 8, 2, 4, 34, 22, 7];

// Ordenar
function sortNumbers(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(sortNumbers(numbers));

// Somar
function sumNumbers(arr) {
  // return arr.reduce((a, b) => a + b, 0);
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(sumNumbers(numbers));

// Retornar o maior número
function getMaxNumber(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
console.log(getMaxNumber(numbers));
