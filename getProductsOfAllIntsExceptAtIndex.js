// var getAll = function (a) {
//   var b = []
//   for(var i = 0; i<l; i++) {
//     var val = 1
//     for(var j = 0; j<a.length; j++) {
//       if(i!==j) {
//         val *= a[j]
//       }
//     }
//     b.push(val)
//   }

//   return b
// }


// var getAll = function(a) {
//   var right = Array(a.length)
//   right[a.length-1] = 1
//   var b = []

//   for(var j = a.length-2; j >= 0; j--) {
//     right[j] = (right[j+1] * a[j+1])
//   }

//   var val = 1
//   for(var k = 0; k < a.length; k++) {
//     b.push(right[k] * val)
//     val *= a[k]
//   }
//   return b
// }

var getAll = function(a) {
  var b = [1]

  for (var i = 1; i < a.length; i++) {
    b.push(a[i-1] * b[i-1])
  }
  var leftSum = 1
  for (var j = a.length-1; j >= 0; j--) {
    b[j] *= leftSum
    leftSum *= a[j]
  }

  return b
}

console.log(getAll([1,7,3,4]))