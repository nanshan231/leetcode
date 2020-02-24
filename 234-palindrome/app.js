var func = function(head) {
  if (!head || !head.next) {
    return true;
  }
  const values = [];
  while (head) {
    values.push(head.val);
    head = head.next;
  }
  const count = Math.floor(values.length / 2);
  let i = 0;
  while (i < count) {
    if (values[i] !== values[values.length - i - 1]) {
      return false;
    }
    i++;
  }
  return true;
};

module.exports = func;
