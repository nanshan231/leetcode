const func = require("./app");
const assert = require("../utils/assert");
const { convertNodesToArray, convertToNode } = require("../utils/linkedList");

const dataTable = [
  {
    title: "Remove first value",
    expect: [2],
    input: {
      value: [1, 2],
      removedValue: 1
    }
  },
  {
    title: "Remove last value",
    expect: [1],
    input: {
      value: [1, 2],
      removedValue: 2
    }
  },
  {
    title: "Remove all value",
    expect: [],
    input: {
      value: [1, 1],
      removedValue: 1
    }
  },
  {
    title: "Remove mutiple value",
    expect: [1, 2, 3, 4, 5],
    input: {
      value: [1, 2, 6, 3, 4, 5, 6],
      removedValue: 6
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  assert.deepEqual(
    expect,
    convertNodesToArray(func(convertToNode(input.value), input.removedValue)),
    `${title}:`
  );
});
