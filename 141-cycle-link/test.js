const func = require("./app");
const assert = require("../utils/assert");
const { convertToNode, createLinkCycleByPos } = require("../utils/linkedList");

const dataTable = [
  {
    expect: false,
    input: {
      value: [1],
      pos: -1
    }
  },
  {
    expect: true,
    input: {
      value: [1],
      pos: 0
    }
  },
  {
    expect: true,
    input: {
      value: [1, 2, 3],
      pos: 1
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(
    expect,
    func(createLinkCycleByPos(input.pos)(convertToNode(input.value))),
    `${i}: `
  );
});
