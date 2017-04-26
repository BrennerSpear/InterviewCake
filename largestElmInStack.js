function Stack() {
  // initialize an empty array
  this.items = [];
  this.maxStack = []
}

// push a new item to the last index
Stack.prototype.push = function(item) {
  this.items.push(item);

  if(!this.maxStack[this.maxStack.length -1] || this.maxStack[this.maxStack.length -1] <= item) {
    console.log(item)
    this.maxStack.push(item)
  }

  return item
};

// remove the last item
Stack.prototype.pop = function() {
  // if the stack is empty, return null
  // (it would also be reasonable to throw an exception)
  if (!this.items.length) {
    return null;
  }
  var popper = this.items.pop()
  if(this.maxStack[this.maxStack.length-1] === popper) {
    this.maxStack.pop()
  }
  return popper
};

// see what the last item is
Stack.prototype.peek = function() {
  if (!this.items.length) {
    return null;
  }
  return this.items[this.items.length -1];
};

Stack.prototype.getMax = function() {
  if (!this.maxStack.length) {
    return null;
  }
  return this.maxStack[this.maxStack.length -1];
}

// Stack.prototype.findMax = function() {
//   var max = Number.NEGATIVE_INFINITY

//   for(var i=0; i < this.items.length; i++) {
//     max = Math.max(max, this.items[i])
//   }
//   return max
// }


var stack = new Stack()


const a = [1,2,4,9,14,12,765,357,98,54,2,1000]

a.forEach(elm => {
  stack.push(elm)
})
stack.pop()
console.log(stack.getMax())