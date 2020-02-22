var reverseList = function(head) {
  if (!head) {
    return null;
  }
  let tail = head.next;
  let current = head;
  let prev = null;
  while (current) {
    current.next = prev;
    prev = current;
    current = tail;
    tail = tail ? tail.next : null;
  }
  return prev;
};

module.exports = reverseList;
