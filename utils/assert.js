const chaiAssert = require("chai").assert;

const assert = {};

for (var k in chaiAssert) {
  const func = chaiAssert[k];
  if (typeof func === "function") {
    assert[k] = getWrapped(func);
  }
}

function getWrapped(func) {
  return function(expect, actual, title) {
    try {
      func.apply(this, arguments);
      console.log(title, "pass");
    } catch (e) {
      const expectJson = JSON.stringify(expect);
      const actualJson = JSON.stringify(actual);
      console.error(
        title,
        "failed, expect `" + expectJson + "`",
        "but got `" + actualJson + "`"
      );
    }
  };
}

module.exports = assert;
