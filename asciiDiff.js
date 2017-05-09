function min(a,b,c)
{
  if (a < b && a <c) {
    return a
  }
  if (b < a && b < c) {
    return b
  }
  else {
    return c
  }
}

function asciiValue(str) {
  var value = 0
  for(var i=0; i<str.length; i++) {
    value += str.charCodeAt(i)
  }
  return value
}

function asciiDiff(letter1, letter2) {
  return Math.abs(letter1.charCodeAt() - letter2.charCodeAt())
}

function findDiff(str1, str2) {

  var m = str1.length
  var n = str2.length
  var matrix = []
  for(var i=0; i<=m; i++) {
    matrix[i] = new Array(n+1)
  }

  for (var i=0; i<=m; i++) {
    for (var j=0; j<=n; j++) {

      if (i===0) {
        matrix[i][j] = asciiValue(str2.slice(0, j))
      }

      else if (j===0) {
        matrix[i][j] = asciiValue(str1.slice(0, i))
      }

      else if (str1.charAt(i-1) === str2.charAt(j-1)) {
        matrix[i][j] = matrix[i-1][j-1]
      }

      else {  
        matrix[i][j] = 
        asciiDiff(str1.charAt(i-1), str2.charAt(j-1)) +

        min(matrix[i][j-1],
        matrix[i-1][j],
        matrix[i-1][j-1])
      }
    }
  }
  console.log(matrix)
  return matrix[m][n]
}

console.log(findDiff('triplebyte', 'TRIPLEBYTE'))