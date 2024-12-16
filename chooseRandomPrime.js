function getRandomPrime(numberOfLeaves) {
  const maxValue = (2 * numberOfLeaves) ^ numberOfLeaves;
  const numberOfBits = maxValue.toString(2).length; //binary with base 2
  const max = 2 * numberOfBits * Math.log(2 * numberOfBits);

  function isPrime(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }

  function chooseRandomPrime(a, b) {
    let num = 0;
    while (true) {
      num = Math.floor(Math.random() * (b - a + 1) + a);
      if (isPrime(num)) {
        return num;
      }
    }
  }
  return chooseRandomPrime(2, max);
}

module.exports = getRandomPrime;
