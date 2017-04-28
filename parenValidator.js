function validateParen(message) {
  
  function compliment(bracket) {
    if(bracket===')') {return '('}
    if(bracket==='}') {return '{'}
    if(bracket===']') {return '['}
  }
  
  var parens = []
  var char
  for(var i=0; i<message.length; i++) {
    char = message[i]
    if(char === '(' || char === '[' || char === '{') {
      parens.push(char)
    }
    if(char === ')' || char === ']' || char === '}') {
      if(parens.pop() !== compliment(char)) {return false}
    }
  }

  if(parens.length > 0) {return false}
  return true
}


console.log(validateParen('{ [ ] ( ) }'))
console.log(validateParen('{ [ ( ] ) }'))
console.log(validateParen('{ [ }'))