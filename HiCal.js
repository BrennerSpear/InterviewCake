var loop = function(conRanges) {
  for(var i = 0; i < conRanges.length-1; i++) {
    for(var j = i+1; j <conRanges.length; j++) {
      var CR1 = conRanges[i]
      var CR2 = conRanges[j]
      var merged = false

      if(CR2.startTime <= CR1.endTime && CR2.endTime >= CR1.endTime) {
        CR1.endTime = CR2.endTime
        merged = true
      }
      if(CR1.startTime <= CR2.endTime && CR1.startTime >= CR2.startTime) {
        CR1.startTime = CR2.startTime
        merged = true
      }
      if(CR1.startTime >= CR2.startTime && CR1.endTime <= CR2.endTime) {
        CR1.startTime = CR2.startTime
        CR1.endTime = CR2.endTime
        merged = true
      }
      if(CR1.startTime <= CR2.startTime && CR1.endTime >= CR2.endTime) {
        merged = true
      }
      if(merged) {
        conRanges.splice(j,1)
        j--
      }
    }
  }
  return conRanges
}


var mergeRanges = function (ranges) {
  var conRanges = ranges.slice()
  var prevLength = conRanges.length

  loop(conRanges)

  while(conRanges.length !== prevLength) {
    prevLength = conRanges.length
    loop(conRanges)
  }

  return conRanges
}

var sortTimes = function(a,b) {
  return a.startTime - b.startTime
}


var mergeRanges = function(ranges) {
  var sortedRanges = ranges.slice().sort(sortTimes)
  // console.log(sortedRanges)
  var mergeRanges = [sortedRanges[0]]

  // console.log(mergeRanges)
  for(var i=1; i < ranges.length; i++) {
    var currentMeeting = sortedRanges[i]
    var lastMergedMeeting = mergeRanges[mergeRanges.length-1]

    if(lastMergedMeeting.endTime >= currentMeeting.startTime) {
      lastMergedMeeting.endTime = Math.max(currentMeeting.endTime, lastMergedMeeting.endTime)
    }
    else {
      mergeRanges.push(currentMeeting)
    }
  }

  return mergeRanges
}



var times =   [
    {startTime: 0,  endTime: 1},
    {startTime: 3,  endTime: 5},
    {startTime: 4,  endTime: 8},
    {startTime: 10, endTime: 12},
    {startTime: 9,  endTime: 10},
    {startTime: 2,  endTime: 3}
]

// var times = [
//     {startTime: 0,  endTime: 1},
//     {startTime: 2,  endTime: 3},
//     {startTime: 1,  endTime: 2},
// ]

//var times =   [{startTime: 1, endTime: 5}, {startTime: 2, endTime: 3}]

var times =   [
    {startTime: 1, endTime: 10},
    {startTime: 2, endTime: 6},
    {startTime: 3, endTime: 5},
    {startTime: 7, endTime: 9},
]

var t = mergeRanges(times)
console.log(t)
