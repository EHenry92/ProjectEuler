const smallestFactor = val => {
  for (let i = 2; i <= val / 2; i++) {
    if (val % i === 0) {return i;}
  }
  return 0;
};

module.exports = smallestFactor;
