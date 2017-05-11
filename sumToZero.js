function sumToZero(arr) {

  for (var i = 0; i < arr.length; i++) {
    for (var j = i+1; j < arr.length; j++) {
      for (var k = j+1; k < arr.length; k++) {
        if(arr[i]+arr[j]+arr[k]===0) {
          return true
        }
      }
    }
  }
  return false
}

function numSort(a,b) {
  return a-b
}
function sumToZero(arr) {

  arr.sort(numSort)
  for (var i = 0; i < arr.length; i++) {
    var j = i+1
    var k = arr.length-1
    var sum
    while(j<k) {
      sum = arr[i]+arr[j]+arr[k]
      if(sum===0) {
        return true
      }
      else if(sum < 0) {
        j++
      }
      else {
        k--
      }
    }
  }

  return false
}


console.log(sumToZero([-1,-2,-4,5,7,1,2,5]))