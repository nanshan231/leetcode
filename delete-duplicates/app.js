var deleteDuplicates = function(head) {
  if (!head || !head.next) {
    return head;
  }
  let tail = head;
  while (tail.next) {
    if (tail.val === tail.next.val) {
      tail.next = tail.next.next;
    } else {
      tail = tail.next;
    }
  }
  return head;
};

module.exports = deleteDuplicates;
