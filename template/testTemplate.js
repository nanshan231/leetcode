const func = require("./app");
const assert = require("../utils/assert");

const dataTable = [{ title: "", expect: "", input: { value: "" } }];

dataTable.forEach((cases, i) => {
  const { expect, input, title } = cases;
  assert.deepEqual(expect, func(input.value), `${title}:`);
});
