/**
 * Check if number is prime.
 * A prime is a positive integer greater than 1 which is only divisible by 1
 * and itself. More information on
 * {@link https://en.wikipedia.org/wiki/Prime_number Wikipedia}
 *
 * @param {Number} n
 * @returns {Boolean}
 */
export default (n) => {
  if (n < 4) return n > 1;
  if (n % 2 === 0 || n % 3 === 0) return false;

  for (let i = 5, j = Math.round(Math.sqrt(n)); i <= j; i += 4) {
    if (n % i == 0) return false;
    i += 2;
    if (n % i == 0) return false;
  }

  return true;
};
