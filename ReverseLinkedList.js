function reverseLinkedList(head) {
  let prev = null;
  let cur = head;

  while (cur) {
    let temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }
  return head;
}
