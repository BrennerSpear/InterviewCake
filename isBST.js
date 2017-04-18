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

var isBalanced = function(node, min, max) {
  var current = node
  var left = node.left
  var right = node.right
  var min = min || Number.NEGATIVE_INFINITY
  var max = max || Number.POSITIVE_INFINITY

  var leftBalanced = true
  var rightBalanced = true

  if(left) {
    if (min < left.value && left.value < current.value) {
      leftBalanced = isBalanced(left, min, current.value)
      if(!leftBalanced) {return false}
    }
    else {
      return false
    }
  }
  if(right) {
    if(current.value < right.value && right.value < max) {
      rightBalanced = isBalanced(right, current.value, max)
    }
    else {
      return false
    }
  }
  return (leftBalanced && rightBalanced)
}

var isBalanced = function(node, min = Number.NEGATIVE_INFINITY, max = Number.POSITIVE_INFINITY) {
  if(!node) {
    return true
  }
  else if (min >= node.value || max <= node.value) {
    return false
  }
  else {
    return (isBalanced(node.left, min, node.value) && isBalanced(node.right, node.value, max))
  }
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


console.log(isBalanced(node))