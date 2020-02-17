const canPermutePalindrome = require("./app");
const assert = require("../utils/assert");

const dataTable = [
  { expect: true, input: { value: "" } },
  { expect: true, input: { value: "a" } },
  { expect: true, input: { value: "aa" } },
  { expect: true, input: { value: "aoeoa" } },
  { expect: true, input: { value: "aeooa" } },
  { expect: false, input: { value: "atco cta" } },
  { expect: false, input: { value: "Aoeoa" } }
];

dataTable.forEach((cases, i) => {
  const { expect, input } = cases;
  assert.deepEqual(
    expect,
    canPermutePalindrome(input.value),
    `${i}: "${input.value}"`
  );
});
