function appearsTwice(arr) {
  var countTotal = 0
  var actualTotal = 0

  for(var i=0; i<arr.length; i++) {
    countTotal += i
    actualTotal += arr[i]
  }

  return actualTotal - countTotal
}