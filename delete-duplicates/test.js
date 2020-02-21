const deleteDuplicates = require("./app");
const assert = require("../utils/assert");
const { convertNodesToArray, convertToNode } = require("../utils/linkedList");

const dataTable = [
  {
    expect: [],
    input: {
      value: []
    }
  },
  {
    expect: [1, 2],
    input: {
      value: [1, 1, 2]
    }
  },
  {
    expect: [1, 2, 3],
    input: {
      value: [1, 1, 2, 3, 3]
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(
    expect,
    convertNodesToArray(deleteDuplicates(convertToNode(input.value))),
    `${i}:`
  );
});
