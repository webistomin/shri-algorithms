const isPrime = (number) => {
  for (let i = 3; Math.pow(i, 2) <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
};

let cache = new Map();

const getAllPrimes = (n) => {
  let result = [2];
  
  if (n < 2) {
    return [];
  }
  
  if (n === 2) {
    return result;
  }
  
  if (!cache.has(n)) {
    for (let i = 3; i <= n; i += 2) {
      if (isPrime(i)) {
        result.push(i);
      }
    }
    cache.set(n, result);
    console.log('set cache');
    return result;
  } else {
    console.log('load from cache');
    return cache.get(n)
  }
};

console.log(getAllPrimes(100));
console.log(getAllPrimes(100));

// getAllPrimes(10);
// getAllPrimes(10);
