var addCoordinates = function(r) {
  r.rightX = r.leftX+r.width
  r.topY = r.bottomY+r.height
}

var intersect = function (r1, r2) {
  addCoordinates(r1)
  addCoordinates(r2)

  var leftX = Math.max(r1.leftX, r2.leftX)
  var rightX = Math.min(r1.rightX, r2.rightX)
  var width = rightX - leftX

  var bottomY = Math.max(r1.bottomY, r2.bottomY)
  var topY = Math.min(r1.topY, r2.topY)
  var height = topY - bottomY

  if(width <= 0 || height <= 0) {return null}

  var r3 = {
    leftX: leftX,
    bottomY: bottomY,
    rightX: rightX,
    topY: topY,
    width: width,
    height: height
  }
  return r3
}

var findOverlap = function(r1Start, r1Length, r2Start, r2Length) {
  var start = Math.max(r1Start, r2Start)
  var end = Math.min(r1Start+r1Length, r2Start+r2Length)
  var length = end - start
  return {start: start, length: length}
}

var intersect = function(r1,r2) {
  var x = findOverlap(r1.leftX, r1.width, r2.leftX, r2.width)
  var y = findOverlap(r1.bottomY, r1.height, r2.bottomY, r2.height)

  if(x.length <= 0 || y.length <= 0) {return null}

  var r3 = {
    leftX: x.start,
    bottomY: y.start,
    width: x.length,
    height: y.length
  }

  return r3
}

var rect1 = {
  leftX: 0,
  bottomY: 0,
  width: 3,
  height: 3
}

var rect2 = {
  leftX: 1,
  bottomY: 2,
  width: 4,
  height: 4
}





console.log(intersect(rect1, rect2))
