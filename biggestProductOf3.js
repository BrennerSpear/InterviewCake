var numSort = function(a,b) {return a-b}

var biggestProd = function (a) {
  a = a.sort(numSort).reverse()

  var pos = a[0] * a[1] * a[2]
  var neg = a[0] * a[a.length-1] * a[a.length-2]

  return Math.max(pos, neg)

}

var biggestProd = function(a, n) {

  if(n > a.length) return -1

  a = a.sort(numSort).reverse()

  var max = -999999 //negative inifinity, really

  var loops = Math.floor(n/2)+1
  var pos = n
  var neg = 0

  for(var i=0; i<loops; i++) {

    var local = 1
    for(var j=0; j<pos; j++) {
      local *= a[j]
    }
    for(var k=0; k<neg; k++) {
      local *= a[a.length-1-k]
    }
    max = Math.max(local, max)
    pos -= 2
    neg += 2
  }

  return max

}


/*
3 - 3,0 | 1,2
4 - 4,0 | 2,2 | 0,4
5 - 5,0 | 1,4 | 3,2
6 - 6,0 | 4,2 | 2,4 | 0,6


*/

var biggestProd = function(a) {
  var max = [-9999, -9999, -9999]
  var min = [9999,   9999]

  for(var i = 0; i < a.length; i++) {
    if(a[i] > max[0]) {
      max[2] = max[1]
      max[1] = max[0]
      max[0] = a[i]
    }
    else if(a[i] > max[1]) {
      max[2] = max[1]
      max[1] = a[i]
    }
    else if(a[i] > max[2]) {
      max[2] = a[i]
    }
    if(a[i] < min[0]) {
      min[1] = min[0]
      min[0] = a[i]
    }
    else if(a[i] < min[1]) {
      min[1] = a[i]
    }
  }

  var pos = max[0] * max[1] * max[2]
  var neg = max[0] * min[0] * min[1]

  return Math.max(pos, neg)
}

var b = [10,20,30,4,5,7,5,3,-11,-22,-30]

//396000

console.log(biggestProd(b))


