var func = function(node) {
  node.val = node.next.val;
  node.next = node.next.next;
};

module.exports = func;
