var fib1 = function (n) {
  return n<=1 ? n : fib1(n-1) + fib1(n-2)
}

var fib2 = function(n) {
  if(n <= 1) {return n}

  var a = 0
  var b = 1
  var temp

  while(n > 1) {
    temp = b
    b = b+a
    a = temp
    n--
  }

  return b
}

var memo = {0:0, 1:1}

var fib3 = function (n) {
  if(memo[n]) {return memo[n]}
  if(n <= 1) {return n}

  var a = 0
  var b = 1
  var temp

  var i = 2
  while (i<=n) {
    temp = b
    b = b+a
    a = temp
    memo[i] = b
    i++
  }

  return b
}

var fib4 = function(n, a=0, b=1) {
  if(n<=1 && a===0) {return n}
  return (n<= 1) ? b : fib4(n-1, b, b+a)
}


var N = 39
var nums = Array.apply(null, {length: N}).map(Number.call, Number)

console.log('', 39, ':', fib3(39))

// nums.forEach(n => {
//   console.log('', n, ':', fib3(n))
// })

console.log(memo)