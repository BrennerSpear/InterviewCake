function shuffle(arr) {
  var random
  for(var i=arr.length-1; i>=0; i--) {
    random = Math.floor(Math.random() * i)
    temp = arr[random]
    arr[random] = arr[i]
    arr[i] = temp
  }
  return arr
}

console.log(shuffle([1,2,3,4,5,6,7,8,9]))