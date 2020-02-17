var twoSum = function (nums, target) {
  var dict = nums.reduce((dict, n, idx) => {
    dict[n] = dict[n] ? dict[n].concat(idx) : [idx];
    return dict;
  }, {});
  for (var i = 0; i < nums.length; i++) {
    const index = dict[target - nums[i]];
    if (!index) {
      continue;
    }
    const anotherIndex = index[0];
    if (i === anotherIndex) {
      continue;
    }
    if (index.length === 1) {
      return [Math.min(i, index[0]), Math.max(i, index[0])];
    }
    if (index.length > 1) {
      return index.sort().slice(0, 2);
    }
  }
};

module.exports = twoSum;