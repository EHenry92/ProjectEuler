
/*
A palindromic number reads the same both ways.
The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

const isPalindrome = (num) => {
  let dig = num.toString().split('');
  for (let i = 0, j = dig.length - 1; i <= j; i++, j--){
    if (dig[i] != dig[j]) {return false;}
  }
  return true;
};

//smallest x digit number is 10 ^(x-1)
//largest x digit number is (10^x) - 1
const largestPalindromeProduct = (digits) => {
  let largestNumber = Math.pow(10, digits) - 1,
      smallestNumber = Math.pow(10, digits - 1);

  while (largestNumber > smallestNumber) {
    for (let i = 1; largestNumber - i > smallestNumber; i++) {
      if (isPalindrome(largestNumber * (largestNumber - i))) {
        return (largestNumber * (largestNumber - i));
      }
    }
    largestNumber--;
  }
  return 0;
};

console.log(largestPalindromeProduct(2));
console.log(largestPalindromeProduct(3));

