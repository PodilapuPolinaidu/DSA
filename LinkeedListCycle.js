function cycle(head) {
  let cur = head;
  let seenNodes = new Set();
  while (cur) {
    if (seenNodes.has(cur)) {
      return true;
    } else {
      seenNodes.add(cur);
      cur = cur.next;
    }
  }
  return false;
}
