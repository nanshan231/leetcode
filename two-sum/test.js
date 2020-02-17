const twoSum = require('./app');
const assert = require('../utils/assert');

const dataTable = [
  { expect: [1, 2], input: { nums: [3, 2, 4], target: 6 } },
  { expect: [0, 1], input: { nums: [3, 3, 4], target: 6 } },
  { expect: [0, 1], input: { nums: [3, 3, 3], target: 6 } },
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, twoSum(input.nums, input.target), `twoSum ${i}:1`);
});
