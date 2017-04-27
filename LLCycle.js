function LinkedListNode(value) {
  this.value = value;
  this.next = null;
}

// function cycle(head) {

//   if(!head.next) {return 'ERROR should be more than 1 node'}
//   var fast = head.next.next
//   var slow = head.next

//   while(fast !== slow) {

//     fast = (fast && fast.next) ? fast.next.next : null
//     slow = slow.next

//     if(!fast && !slow) {
//       return false
//     }
//   }

//   return true
// }


function cycle(head) {
  var fast = head
  var slow = head

  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next

    if(fast === slow) {
      return true
    }
  }

  return false
}


var a = new LinkedListNode('A');
var b = new LinkedListNode('B');
var c = new LinkedListNode('C');
var d = new LinkedListNode('D');
var e = new LinkedListNode('E');
var f = new LinkedListNode('F');

a.next = b
b.next = c
c.next = a
d.next = e
e.next = f

console.log(cycle(a))