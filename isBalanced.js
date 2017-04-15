function BinaryTreeNode(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
};


var n = new BinaryTreeNode(0)

var n2 = n.insertLeft(1)
// var n3 = n.insertRight(2)
var n4 = n2.insertLeft(3)
// var n5 = n2.insertRight(4)
// var n6 = n3.insertLeft(5)
// var n7 = n3.insertRight(6)
var n8 = n4.insertLeft(7)
// var n9 = n4.insertRight(8)
// var n10 = n5.insertLeft(9)
// var n11 = n5.insertRight(10)
// var n12 = n6.insertLeft(11)
// var n13 = n6.insertRight(12)
// var n14 = n7.insertLeft(13)
// var n15 = n7.insertRight(14)

var isBalanced = function(head) {
  var min = 99999
  var queue = [[head,0]]
  var currentNode = null
  var currentDepth = null

  while(queue.length > 0) {
    currentNode = queue[0][0]
    currentDepth = queue[0][1]

    if(currentNode.left) {
      queue.push([currentNode.left, currentDepth+1])
    }
    if(currentNode.right) {
      queue.push([currentNode.right, currentDepth+1])    
    }
    if(!currentNode.left && !currentNode.right) {
      min = Math.min(min, currentDepth)
    }
    if(currentDepth - min > 1) {
      return false
    }
    queue.shift()
  }

  return true

}

console.log(isBalanced(n))