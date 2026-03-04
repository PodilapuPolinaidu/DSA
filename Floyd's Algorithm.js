function cycle(head) {
  let slow = head;
  let fast = head.next;
  if (head == null) {
    return false;
  }

  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }

  return true;
}
