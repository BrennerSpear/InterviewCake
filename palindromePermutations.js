function evenPalindrome(strArr) {
  var answer = 0
  strArr.forEach(letter => answer ^= letter.charCodeAt(0))
  return answer === 0
}

var palindromePerms = function(str) {

  var strArr = str.split('')
  var answer = 0

  if(strArr.length%2 === 0) {
    return evenPalindrome(strArr)
  }

  var vals = {}

  for(var i=0; i<strArr.length; i++) {
    var id = strArr[i]
    if(vals[id]) {
      delete vals[id]
    }
    else {
      vals[id] = true
    }
  }

  var count = 0
  for(key in vals) {
    count++
  }

  return count === 1
}


console.log(palindromePerms('hhaaba'))