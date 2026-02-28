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


