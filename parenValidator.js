function validateParen(message) {  

  const compliment = {
    ')':'(',
    '}':'{',
    ']':'['
  }

  const open = new Set(['(','{','['])
  const close = new Set([')','}',']'])
  
  var parens = []
  var char
  for(var i=0; i<message.length; i++) {
    char = message[i]
    if(open.has(char)) {
      parens.push(char)
    }
    if(close.has(char)) {
      if(parens.pop() !== compliment[char]) {return false}
    }
  }

  return parens.length === 0
}


console.log(validateParen('{ [ ] ( ) }'))
console.log(validateParen('{ [ ( ] ) }'))
console.log(validateParen('{}}'))