var func = function(l1, l2) {
  if (!l1 || !l2) {
    return l1 || l2;
  }
  let head = null;
  if (l1.val <= l2.val) {
    head = l1;
    queue(l1, l2);
  } else {
    head = l2;
    queue(l2, l1);
  }
  return head;
};

var queue = (baseQueue, refQueue) => {
  let prev = baseQueue;
  while (baseQueue && refQueue) {
    if (baseQueue.val <= refQueue.val) {
      prev = baseQueue;
      baseQueue = baseQueue.next;
    } else {
      prev.next = refQueue;
      refQueue = refQueue.next;
      prev = prev.next;
      prev.next = baseQueue;
    }
  }
  if (refQueue) {
    prev.next = refQueue;
  }
};

module.exports = func;
