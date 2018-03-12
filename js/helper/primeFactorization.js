var smallestFactor = require('./smallestFactor');
const primeFactorization = (num) => {
  if (num < 1) {return {};}
  const fac = smallestFactor(num);
  let out;
  if (fac <= 1) {
    out = {};
    out[num] = 1;
    return out;
  }
  else {
    out = primeFactorization(num / fac);
    out[fac] = out[fac] + 1 || 1;
    return out;
  }
};

module.exports = primeFactorization;
