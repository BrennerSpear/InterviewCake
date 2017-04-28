function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}


function reverseList(head) {
  if(!head || !head.next) {return head}
  var prev = null
  var current = head
  var next = current.next
  while(next) {
    current.next = prev
    prev = current
    current = next
    next = next.next
  }
  current.next = prev
  return current
}

var a = new LinkedListNode(1)
var b = new LinkedListNode(2)
// var c = new LinkedListNode(3)
// var d = new LinkedListNode(4)
// var e = new LinkedListNode(5)
// var f = new LinkedListNode(6)

a.next = b
// b.next = c
// c.next = d
// d.next = e
// e.next = f

var current = a

while(current) {
  console.log(current.value)
  current = current.next
}

current = reverseList(a)

while(current) {
  console.log(current.value)
  // console.log(current.next)
  current = current.next
}