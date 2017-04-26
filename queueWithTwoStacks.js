var Queue = function() {
  this.inStack =[]
  this.outStack = []
}


Queue.prototype.push = function(val) {
  this.inStack.push(val)
};

Queue.prototype.pop = function() {
  if(this.outStack.length < 1) {
    for(var i = 0; i < this.inStack.length; i++) {
      this.outStack.push(this.inStack.pop())
    }
  }
  return this.outStack.pop()
};



var queue = new Queue()

const a = [1,2,3,4,5,6]



a.forEach(val => {
  queue.push(val)
})

console.log(queue.inStack)
console.log(queue.pop())
console.log(queue.pop())