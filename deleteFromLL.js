function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function deleteNode(node) {
  if(!node.next) {
    node = null
  }
  else {
    node.value = node.next.value
    node.next = node.next.next
  }
}


var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');

a.next = b;
b.next = c;

deleteNode(b);

var current = a
while(current) {
  console.log(current.value)
  current = current.next
}