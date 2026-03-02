function Node(val) {
  this.val = val;
  this.next = null;
}

function MyLinkedList() {
  this.head = null;
  this.size = 0;
}

// Add at Head
MyLinkedList.prototype.addToHead = function (val) {
  const newNode = new Node(val);
  newNode.next = this.head;
  this.head = newNode;
  this.size++;
};

// Add at Tail
MyLinkedList.prototype.addAtTail = function (val) {
  const newNode = new Node(val);

  if (this.head === null) {
    this.head = newNode;
  } else {
    let cur = this.head;
    while (cur.next !== null) {
      cur = cur.next;
    }
    cur.next = newNode;
  }
  this.size++;
};

// Add at Index
MyLinkedList.prototype.addAtIndex = function (index, val) {
  if (index < 0 || index > this.size) return;

  if (index === 0) {
    this.addToHead(val);
    return;
  }

  if (index === this.size) {
    this.addAtTail(val);
    return;
  }

  const newNode = new Node(val);
  let cur = this.head;

  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  newNode.next = cur.next;
  cur.next = newNode;
  this.size++;
};

// Get value at index
MyLinkedList.prototype.get = function (index) {
  if (index < 0 || index >= this.size) return -1;

  let cur = this.head;
  for (let i = 0; i < index; i++) {
    cur = cur.next;
  }
  return cur.val;
};

// Delete at index
MyLinkedList.prototype.deleteAtIndex = function (index) {
  if (index < 0 || index >= this.size) return;

  if (index === 0) {
    this.head = this.head.next;
    this.size--;
    return;
  }

  let cur = this.head;
  for (let i = 0; i < index - 1; i++) {
    cur = cur.next;
  }

  cur.next = cur.next.next;
  this.size--;
};

// MyLinkedList.prototype.middleNode = function(){
//   let mid =
// }
const list = new MyLinkedList();

list.addToHead(10);
list.addAtTail(20);
list.addAtIndex(1, 15);

// console.log(list.get(0)); // 10
// console.log(list.get(1)); // 15
// console.log(list.get(2)); // 20

// list.deleteAtIndex(1);
// console.log(list.get(1)); // 20
// console.log(list.size);
MyLinkedList.prototype.middleNode = function () {
  let mid = this.size / 2;
  // console.log(mid)
  let cur = this.head;
  // console.log(cur)
  if (mid % 2 == 0) {
    mid = mid;
  } else {
    mid = Math.floor(mid);
  }
  // console.log(mid);
  for (let i = 0; i < mid; i++) {
    cur = cur.next;
  }
  console.log(cur.val);
};
list.middleNode();
