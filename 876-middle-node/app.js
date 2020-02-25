var func = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
};

module.exports = func;
