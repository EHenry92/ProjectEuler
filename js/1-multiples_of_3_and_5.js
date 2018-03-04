/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
 we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below 1000.
*/

const multipleSum = (upperBound) => {
  let total = 0;
  if (upperBound < 3) {return 0;}
  for (let i = 3; i < upperBound; i++) {
    if (i % 3 === 0 || i % 5 === 0 ) {
      total += i;
    }
  }
  return total;

};

console.log(multipleSum(10));
console.log(multipleSum(1000));
