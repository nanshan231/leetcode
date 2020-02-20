var func = function(head) {
  if (!head) {
    return false;
  }
  let fast = head;
  let slow = head;
  while (true) {
    if (!fast.next || !fast.next.next) {
      return false;
    }
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
};

module.exports = func;
