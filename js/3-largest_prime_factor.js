/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

var smallestFactor = require('./helper/smallestFactor');

const largestPrimeFactor = num => {
  let largest = 1,
      i = 1,
      j = num;
  while ( i <= j) {
    if (num % i == 0) {
      j = num / i;
      if (smallestFactor(j) === 1) {return j;}
      if (smallestFactor(i) === 1) {largest = i;}
    }
    i++;
  }
  return largest;
};

console.log(largestPrimeFactor(13195));
console.log(largestPrimeFactor(600851475143));
