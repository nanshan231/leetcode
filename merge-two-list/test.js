const func = require("./app");
const assert = require("../utils/assert");
const { convertToNode, convertNodesToArray } = require("../utils/utils");

const dataTable = [
  {
    expect: [],
    input: {
      value1: [],
      value2: []
    }
  },
  {
    expect: [1, 2],
    input: {
      value1: [1, 2],
      value2: []
    }
  },
  {
    expect: [1, 1, 2, 3, 4, 4],
    input: {
      value1: [1, 2, 4],
      value2: [1, 3, 4]
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(
    expect,
    convertNodesToArray(
      func(convertToNode(input.value1), convertToNode(input.value2))
    ),
    `${i}:`
  );
});
