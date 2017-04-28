var message = 'find you (will (pain only go you) recordings) security the into if';


function findParen(message, index) {
  
  var counter = 0
  for(var i=index+1; i<message.length; i++) {
    if(message[i]==='(') {
      counter++
    }
    if(message[i]===')' && counter===0) {
      return i
    }
    if(message[i]===')' && counter>0) {
      counter--
    }
  }

  return 'broken parens'
}


console.log(findParen(message, 10))