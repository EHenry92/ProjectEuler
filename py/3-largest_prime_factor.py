# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143?

def isPrime (val):
  if val < 2:
    return False;
  i = long(2);
  while i < val:
    if (val % i == 0):
      return False;
    i = i + 1;
  return True;

def largestPrimeFactor(num):
  largest = i = 1;
  j = num;
  while i <= j:
    if num % i == 0:
      j = num / i;
      if isPrime(j):
        return j;
      if isPrime(i):
        largest = i;
    i+= 1;
  return largest;

print(largestPrimeFactor(13195));
print(largestPrimeFactor(600851475143));
