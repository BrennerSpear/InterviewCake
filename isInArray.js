var includes = function(target, arr) {
  return arr.indexOf(target) < 0 ? false : true
}

var includes = function(target, arr) {
  var left = 0
  var right = arr.length -1
  var middle
  var current
  while(left <= right) {
    middle = Math.floor((left+right)/2)
    current = arr[middle]
    if(target === current) {
      return true
    }
    if(target > current) {
      left = middle+1
    }
    if(target < current) {
      right = middle-1
    }
  }
  return false
}



var a = [1,2,3,4,5,6,8,9,10]
var b = [1,2,3,4,5,6,7,8,9,10]
b.forEach(elm => {
  console.log(includes(elm, a))
})

// console.log(includes(1, a))
// console.log(includes(1, a))