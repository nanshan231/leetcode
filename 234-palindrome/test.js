const func = require("./app");
const assert = require("../utils/assert");
const { convertToNode } = require("../utils/linkedList");

const dataTable = [
  {
    title: "Emtpy link",
    expect: true,
    input: {
      value: []
    }
  },
  {
    title: "Single node link",
    expect: true,
    input: {
      value: [1]
    }
  },
  {
    title: "Two nodes link",
    expect: true,
    input: {
      value: [1, 1]
    }
  },
  {
    title: "Multiple nodes link",
    expect: true,
    input: {
      value: [1, 2, 1]
    }
  },
  {
    title: "General link",
    expect: false,
    input: {
      value: [1, 2, 3, 1]
    }
  }
];

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  assert.deepEqual(expect, func(convertToNode(input.value)), `${title}:`);
});
