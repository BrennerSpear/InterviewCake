var findMovies = function (flightLength, movieLengths) {
  var matches = {}
  var timeLeft
  for(var i=0; i < movieLengths.length; i++) {
    if(matches[movieLengths[i]]) {
      console.log(matches)
      return true
    }
    timeLeft = flightLength - movieLengths[i]
    matches[timeLeft] = true
  }
  return false
}


var movies = [1,4,6,8,3,9,2]
var flights = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]


flights.forEach(f => {
  console.log(findMovies(f, movies))
})