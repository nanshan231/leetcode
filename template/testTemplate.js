const func = require("./app");
const assert = require("../utils/assert");

const dataTable = [{ expect: "", input: { value: "" } }];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(expect, func(input.value), `${i}: "${input.value}"`);
});
