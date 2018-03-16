const smallestFactor = val => {
  if (val !==2 && val % 2 === 0) {return 2;}
  for (let i = 3; i <= val / 2; i= i + 2) {
    if (val % i === 0) {return i;}
  }
  return 1;
};

module.exports = smallestFactor;
