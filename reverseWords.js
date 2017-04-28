var message = 'find you will pain only go you recordings security the into if';

function reverseWords(str) {
  var strArray = str.split(' ')
  const length = strArray.length
  const midway = Math.floor(length/2)
  var temp
  var compliment
  for(var i=0; i<midway; i++) {
    compliment = length-1-i
    temp = strArray[i]
    strArray[i] = strArray[compliment]
    strArray[compliment] = temp
  }

  return strArray.join(' ')
}





console.log(reverseWords(message))