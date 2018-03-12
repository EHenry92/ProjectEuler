/*
The sum of the squares of the first ten natural numbers is,
1^2 + 2^2 + ... + 10^2 = 385

The square of the sum of the first ten natural numbers is,
(1 + 2 + ... + 10)^2 = 552 = 3025

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumSquareDifference = upperBound => {
  let squaresTotal = 1, sum = 1;
  for (let i = 2; i <= upperBound; i++) {
    squaresTotal += i * i;
    sum += i;
  }
  return (sum * sum) - squaresTotal;
}

console.log(sumSquareDifference(10));
console.log(sumSquareDifference(100));





// const sumOfSquares = upperBound => {
//   let total = 1;
//   for (let i = 2; i<= upperBound; i++) {
//     total += i * i;
//   }
//   return total;
// }

// const squareOfSum = upperBound => {
//     sum = 1;
//     for(let i = 2; i<=upperBound; i++) {
//       sum += i;
//     }
//     return sum * sum;
// }

// const sumSquareDifference = upper => squareOfSum(upper) - sumOfSquares(upper);
