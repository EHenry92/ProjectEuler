/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/
const isPrime = val => {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) {return false;}
  }
  return true;
};

const largestPrimeFactor = num => {
  let largest = 1,
      i = 1,
      j = num;
  while ( i <= j) {
    if (num % i == 0) {
      j = num / i;
      if (isPrime(j)) {return j;}
      if (isPrime(i)) {largest = i;}
    }
    i++;
  }
  return largest;
};

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
