function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

function kthToLastNode(k, head) {
  var length = 0
  var current = head
  while(current) {
    current = current.next
    length++
  }

  var n = length-k

  current = head
  for(var i=0; i<n; i++) {
    current = current.next
  }

  return current.value
}

function kthToLastNode(k, head) {
  var front = head
  var back = head
  var counter = k-1

  for(var i=0; i<k; i++) {
    front = front.next
  }

  while(front) {
    front = front.next
    back = back.next
  }

  return back.value
}


var a = new LinkedListNode("Angel Food");
var b = new LinkedListNode("Bundt");
var c = new LinkedListNode("Cheese");
var d = new LinkedListNode("Devil's Food");
var e = new LinkedListNode("Eccles");

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kthToLastNode(5, a))