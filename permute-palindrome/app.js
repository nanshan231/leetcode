/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
  const length = s.length;
  if (length === 0 || length === 1) {
    return true;
  }
  const dict = {};
  for (let i = 0; i < s.length; i++) {
    if (dict[s[i]] === undefined) {
      dict[s[i]] = 1;
    } else {
      dict[s[i]] += 1;
    }
  }
  const odds = Object.values(dict).filter(isOdd);
  return odds.length <= 1;
};

var isOdd = num => num % 2 !== 0;

module.exports = canPermutePalindrome;
