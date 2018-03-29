/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20
*/

/*
1 = 1 | 2 = 2 | 3 = 3 | 4 = 2 ^2 | 5 = 5 | 6= 2 * 3 | 7 = 7 | 8 = 2 ^3 | 9 = 3^ 2 | 10 = 5 * 2
smallestMultiple = 1 * 2^3 * 3^3 * 5 * 7 = 2520
*/

var primeFactorization = require('./helper/primeFactorization');


const multiplyPrimes = obj => {
  let total = 1;
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      total *= Math.pow(key, obj[key])
    }
  }
  return total;
}

const smallestMultiple = (upperBound) => {
  let accumulator = {};
  for (let i = 2; i <= upperBound; i++) {
    let primes = primeFactorization(i);
    for (let primeNumber in primes) {
      if (primes.hasOwnProperty(primeNumber)) {
        if (!accumulator[primeNumber] || accumulator[primeNumber] < primes[primeNumber]) {
          accumulator[primeNumber] = primes[primeNumber];
        }
      }
    }
  }
  return multiplyPrimes(accumulator);
};


console.log(smallestMultiple(10));
console.log(smallestMultiple(20));

