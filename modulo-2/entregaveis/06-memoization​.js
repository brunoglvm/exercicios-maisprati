function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
}

const memoizedSum = memoize((n) => {
  console.log(`Calculando ${n}...`);
  return n + n;
});

console.log(memoizedSum(8));
console.log(memoizedSum(8));
console.log(memoizedSum(5));
console.log(memoizedSum(5));
console.log(memoizedSum(5));
