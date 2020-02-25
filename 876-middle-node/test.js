const func = require("./app");
const assert = require("../utils/assert");
const {
  convertToNode,
  convertSingleNodeToArray
} = require("../utils/linkedList");

const dataTable = [
  {
    title: "Single node",
    expect: [1],
    input: {
      value: [1]
    }
  },
  {
    title: "Even nodes",
    expect: [2],
    input: {
      value: [1, 2]
    }
  },
  {
    title: "Odd nodes",
    expect: [2],
    input: {
      value: [1, 2, 3]
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  assert.deepEqual(
    expect,
    convertSingleNodeToArray(func(convertToNode(input.value))),
    `${title}:`
  );
});
