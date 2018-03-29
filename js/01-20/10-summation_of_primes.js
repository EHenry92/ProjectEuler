/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/
var smallestFactor = require('../helper/smallestFactor');

const summationOfPrimes = upper => {
  if (upper <= 2){return 0;}
  let total = 2;
  for (let i = 3; i < upper; i = i + 2) {
    if (smallestFactor(i) === 1) {
      total += i;
    }
  }
  return total;
};

console.log(summationOfPrimes(5));
console.log(summationOfPrimes(10));
console.log(summationOfPrimes(2000000));


// const summationOfPrimes = (top, bottom = 2) => {
//   if (top < 2 || bottom >= top) {return 0;}

//   let dist = top + bottom;
//   let mid = dist % 2 === 0 ? dist / 2 : (dist - 1) / 2;
//   let currValue = smallestFactor(mid) === 1 ? mid : 0;
//   let b = mid-bottom > 0 ? summationOfPrimes(mid, bottom) : 0;
//   let t = summationOfPrimes(top, mid + 1);
//   return ( t + currValue + b);
// };
