function trucking(trucks, range) {
  if(trucks===0) {
    return 0
  }
  var distanceToRefuel = range/trucks

  return distanceToRefuel + trucking(trucks-1, range)
}
function trucking2(trucks, range) {
  var distance = 0

  while(trucks > 0) {
    distance += range/trucks
    trucks--
  }

  return distance
}
console.log(trucking2(50, 100))
