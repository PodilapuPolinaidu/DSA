function Node(val) {
  this.val = val;
  this.next = nul;
}
function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

MyLinkedList.prototype.addToHead = function (val) {
  let newNode = new Node(val);
  newNode.next = this.head;
  newNode.head = newNode;
  this.size++;
};

MyLinkedList.prototype.addAtTail = function (val) {
  let newNode = new Node(val);
  if (this.head == null) {
    this.head = newNode;
  } else {
    let cur = this.head;
    while (cur.next != null) {
      cur = cur.next;
    }
    cur.next = newNode;
  }
  this.size++;
};

MyLinkedList.prototype.addAtIndex = function (val) {
  let newNode = new Node(val);
  if (index == 0) {
    this.addToHead(val);
    return;
  } else if (index == this.size) {
    this.addAtTail(val);
    return;
  } else {
    let cur = this.head;
    for (let i = 0; i < index - 1; i++) {
      cur = cur.next;
    }
    newNode.next = cur.next;
    cur.next = newNode;
  }
  this.size++;
};
