const func = require("./app");
const assert = require("../utils/assert");
const { convertToNode, convertNodesToArray } = require("../utils/linkedList");

const dataTable = [
  {
    title: "Remove head node",
    expect: [2],
    input: {
      value: [1, 2],
      removed: 1
    }
  },
  {
    title: "Remove other node",
    expect: [1, 3],
    input: {
      value: [1, 2, 3],
      removed: 2
    }
  }
];

function removeNode(head, removedVal) {
  let tail = head;
  while (tail && tail.val !== removedVal) {
    tail = tail.next;
  }
  func(tail);
  return head;
}

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  assert.deepEqual(
    expect,
    convertNodesToArray(removeNode(convertToNode(input.value), input.removed)),
    `${title}:`
  );
});
