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

var secondLargest = function(node, parent = undefined, wentLeft = false) {

  if(node.right) {
    return secondLargest(node.right, node, wentLeft)
  }
  else if(node.left && !wentLeft) {
    return secondLargest(node.left, node, true)
  }
  else if(wentLeft) {
    return node.value
  }
  else if (parent){
    return parent.value
  }
  else {
    return 'not enough nodes'
  }
  //go right
  //if no right, go left
    //if no right again, return node
    //if right, keep going
  //if no left, return parent node
}

var secondLargest = function(node) {
  if(!node || (!node.left && !node.right)) {return null}
  var current = node
  var second = current

  //keep going right
  while(current.right) {
    second = current
    current = current.right
  }
  //if there's no left subtree, take the second val
  if(!current.left) {
    return second.value
  }
  //head down the left subtree
  current = current.left

  //keep going right
  while(current.right) {
    current = current.right
  }

  //return the max of the left subtree, which is the second largest val
  return current.value
}





var node = new BinaryTreeNode(10)
node.insertRight(14)
node.right.insertRight(16)
node.right.insertLeft(12)
node.right.right.insertRight(17)
node.right.right.insertLeft(15)
node.right.left.insertRight(13)
node.right.left.insertLeft(11)
node.insertLeft(6)
node.left.insertLeft(4)
node.left.insertRight(8)
node.left.right.insertRight(9)
node.left.right.insertLeft(7)
node.left.left.insertRight(5)
node.left.left.insertLeft(3)

console.log(secondLargest(node))