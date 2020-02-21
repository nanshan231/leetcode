var func = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  if (headA === headB) {
    return headA;
  }
  let pA = headA;
  let pB = headB;
  while (pA.next || pB.next) {
    pA = pA.next ? pA.next : headB;
    pB = pB.next ? pB.next : headA;
    if (pA === pB) {
      return pA;
    }
  }
  return null;
};

module.exports = func;
