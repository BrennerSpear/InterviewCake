var Queue = function() {
  this.inStack =[]
  this.outStack = []
}


Queue.prototype.push = function(val) {
  this.inStack.push(val)
};

Queue.prototype.pop = function() {
  if(this.outStack.length < 1) {
    while(this.inStack.length>0) {

      this.outStack.push(this.inStack.pop())
    }

    if(this.outStack.length < 1) {return null}
  }
  return this.outStack.pop()
};



var queue = new Queue()

const a = [1,2,3,4,5,6]


console.log(queue.pop())
a.forEach(val => {
  queue.push(val)
})

console.log(queue.pop())
console.log(queue.pop())
queue.push(7)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())