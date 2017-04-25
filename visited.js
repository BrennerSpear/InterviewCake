var visited = {}

var visit = function(url, memo) {
  if(url.length < 1) {return null}

  //add space to end, URLS can't have a space so this signifies end
  var url = url + ' '
  //current node in the tree
  var current = memo
  var char

  for(var i = 0; i < url.length-1; i++) {
    char = url.charAt(i)
    current[char] =  current[char] || {}
    current = current[char]
  }

  char = url.charAt(url.length-1)
  var wasVisited = (current[char] === true) ? true : false
  current[char] = true

  return wasVisited
}

var visitedBool = function(url, memo) {
  if(url.length < 1) {return null}
  var url = url + ' '
  var current = memo
  var char
  for(var i = 0; i < url.length; i++) {
    char = url.charAt(i)
    if(!current[char]) {
      return false
    }
    current = current[char]
  }
  return current === true 
}

var urls = [
  'www.brenner.com', //false
  'www.brenner.com', //true
  'www.brenner.co', //false
  'www.brenner.com/logan', //false
  'www.logan.com' //false
]

var urls2 = [
  'www.brenner.com/logan', //true
  'www.brenner.c', //false
  'www.brenner.com/logan/spear' //false
]


urls.forEach(url => {
  console.log(visit(url, visited))
})

urls2.forEach(url => {
  console.log(visitedBool(url, visited))
})
