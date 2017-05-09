function wordCount(longString) {
  var strArr = longString.split(/[.,;:\s\n]/)

  var wordMap = new Map()
  var count
  for(var i=0; i<strArr.length; i++) {
    word = strArr[i].toLowerCase()
    count = wordMap.get(word) ? wordMap.get(word) + 1 : 1
    wordMap.set(word, count)
  }

  wordMap.delete('')
  return wordMap

}

console.log(wordCount("We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake. \n The bill came to five dollars."))