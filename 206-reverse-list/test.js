const reverseList = require("./app");
const assert = require("../utils/assert");
const { convertToNode, convertNodesToArray } = require("../utils/linkedList");

const dataTable = [
  {
    title: "Empty value",
    expect: [],
    input: {
      value: []
    }
  },
  {
    title: "Single value",
    expect: [1],
    input: {
      value: [1]
    }
  },
  {
    title: "Multiple value",
    expect: [2, 1],
    input: {
      value: [1, 2]
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  assert.deepEqual(
    expect,
    convertNodesToArray(reverseList(convertToNode(input.value))),
    `${title}:`
  );
});
