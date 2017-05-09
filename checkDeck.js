function checkDeck(shuffledDeck, half1, half2) {
  var h1Index = 0
  var h2Index = 0

  for(var i=0; i<shuffledDeck.length; i++) {
    if(half1[h1Index] && shuffledDeck[i] === half1[h1Index]) {
      h1Index++
    }
    else if(half2[h2Index] && shuffledDeck[i] === half2[h2Index]) {
      h2Index++
    }
    else{
      return false
    }
  }

  return true
}