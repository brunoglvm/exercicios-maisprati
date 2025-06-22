function fatorial(n) {
  if (n < 0) {
    throw new Error("Número negativo!");
  } else if (n === 0) {
    return 1;
  } else {
    return n * fatorial(n - 1);
  }
}

const num = 5;
console.log(`${num}! = ${fatorial(num)}`);
