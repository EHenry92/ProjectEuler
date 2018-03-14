/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 5^2.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const isPyTriplet = (a, b, c) => Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2);

const specialPythagoreanTriplet = (sum) => {
  for (let a = 1; a < sum / 3; a++) {
    let b = (((0 - Math.pow(sum, 2)) / 2) + (sum * a)) / (a - sum);
    if (b % 1 === 0) {
      let c = sum - a - b;
      if (isPyTriplet(a, b, c)) {return (a * b * c);}
    }
  }
  return false;
};


console.log(specialPythagoreanTriplet(12));
console.log(specialPythagoreanTriplet(30));
console.log(specialPythagoreanTriplet(1000));


/*
  Logic:
  a + b + c = y ----> c = y - a - b
  a^2 + b^2 = c^2 ----> a^2 + b^2 = (y - a - b)^2
    ...
    0 = y^2 - 2ya - 2yb + 2ab
    ...
    -(y^2)/2 = ab - ya - yb
    ...
    [(y^2) /2 ] + ya = b(a - y)
    ...
      ([-(y^2) /2 ] + ya )/ (a-y) = b
*/
