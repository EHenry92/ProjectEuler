/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
*/
var smallestFactor = require('../helper/smallestFactor');

const nthPrime = (n) => {
  if (n < 1) {return 1;}
  let num = 2, primes = 1;
  while (primes !== n) {
    num++;
    if (smallestFactor(num) === 1) {primes++;}
  }
  return num;
};

console.log(nthPrime(5));
console.log(nthPrime(6));
console.log(nthPrime(10001));
