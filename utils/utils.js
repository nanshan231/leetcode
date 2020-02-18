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

module.exports = {
  convertToNode,
  convertNodesToArray
};
