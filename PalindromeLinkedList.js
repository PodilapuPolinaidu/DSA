function palindrome(head) {
  let slow = head;
  let fast = head;
  while (fast || fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  let pre = null;
  let cur = slow;
  while (cur) {
    let temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }

  let firstlist = head;
  let secondlist = pre;
// checking first nd last
  while (secondlist) {
    if (firstlist.value != secondlist.value) {
      return false;
    }

    secondlist = secondlist.next;
    firstlist = firstlist.next;
  }

  return true;
}
