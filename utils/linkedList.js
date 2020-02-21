function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

const convertToNode = nums => {
  let head = null;
  let tail = null;
  for (let i = 0; i < nums.length; i++) {
    if (!head) {
      head = new ListNode(nums[i], null);
      tail = head;
    } else {
      tail.next = new ListNode(nums[i], null);
      tail = tail.next;
    }
  }
  return head;
};

const convertNodesToArray = node => {
  const result = [];
  while (node) {
    result.push(node.val);
    node = node.next;
  }
  return result;
};

const createLinkCycleByPos = pos => head => {
  if (!head || pos < 0) {
    return head;
  }
  if (!head.next && pos === 0) {
    head.next = head;
    return head;
  }
  let count = 0;
  let targetNode = null;
  let tail = head;
  while (tail.next) {
    if (count === pos) {
      targetNode = tail;
    }
    tail = tail.next;
    count += 1;
  }
  tail.next = targetNode;
  return head;
};

module.exports = {
  convertToNode,
  convertNodesToArray,
  createLinkCycleByPos
};
