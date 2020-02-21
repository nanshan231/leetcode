const func = require("./app");
const assert = require("../utils/assert");
const {
  convertSingleNodeToArray,
  convertToNode,
  createIntersectionLink
} = require("../utils/linkedList");

const dataTable = [
  {
    title: "single node",
    expect: [1],
    input: {
      valueA: [1],
      valueB: [1],
      skipA: 0,
      skipB: 0
    }
  },
  {
    title: "case 1",
    expect: [8],
    input: {
      valueA: [4, 1, 8, 4, 5],
      valueB: [5, 0, 1, 8, 4, 5],
      skipA: 2,
      skipB: 3
    }
  },
  {
    title: "case 2",
    expect: [],
    input: {
      valueA: [4, 1, -8, -4, -5],
      valueB: [5, 0, 1, 8, 4, 5],
      skipA: -1,
      skipB: -1
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  const { headA, headB } = createIntersectionLink(input.skipA, input.skipB)(
    convertToNode(input.valueA),
    convertToNode(input.valueB)
  );
  assert.deepEqual(
    expect,
    convertSingleNodeToArray(func(headA, headB)),
    `${title}:`
  );
});
