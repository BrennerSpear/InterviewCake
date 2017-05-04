function permutate(lettersLeft, str, permutations) {

  if(lettersLeft.length===0) {
    permutations.add(str)
  }

  if(str===undefined) {
    str = ''
    var lettersLeft = lettersLeft.split('')
    var permutations = new Set()
  }
  for(var i=0; i<lettersLeft.length; i++) {
    var newlettersLeft = lettersLeft.slice()
    var newstr = str + newlettersLeft.splice(i,1)
    permutate(newlettersLeft, newstr, permutations)
  }

  return permutations
}


console.log(permutate('alpha'))