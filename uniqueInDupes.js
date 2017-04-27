var findUnique = function(arr) {
  var vals = {}

  for(var i=0; i<arr.length; i++) {
    var id = arr[i]
    if(vals[id]) {
      delete vals[id]
    }
    else {
      vals[id] = true
    }
  }

  for(key in vals) {
    return key
  }

}

var findUnique = function(arr) {
  var answer = 0

  arr.forEach(id => {
    answer = (answer^id)
  })

  return answer
}


const a = [1,3,2,4,6,5,10,10,8,7,9,8,9,7,8,6,4,5,3,1,2]

console.log(findUnique(a))