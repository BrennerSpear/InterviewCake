function sortScores(scores, highScore) {
  var buckets = new Array(highScore+1)

  for(var i=0; i<scores.length; i++) {
    if(buckets[scores[i]]) {
      buckets[scores[i]].push(scores[i])
    }
    else {
      buckets[scores[i]] = [scores[i]]
    }
  }

  var sortedScores = []
  buckets.forEach(bucket => {
    if(bucket) {
      bucket.forEach(score => {
        sortedScores.push(score)
      })
    }
  })

  return sortedScores
}





var unsortedScores = [37, 89, 41, 65, 91, 53, 37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;

console.log(sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE))