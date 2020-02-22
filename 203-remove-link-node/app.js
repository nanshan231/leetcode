var func = function(head, val) {
  if (!head) {
    return null;
  }
  while (head && head.val === val) {
    head = head.next;
  }
  let tail = head;
  while (tail && tail.next) {
    if (tail.next.val === val) {
      tail.next = tail.next.next;
    } else {
      tail = tail.next;
    }
  }
  return head;
};

module.exports = func;
