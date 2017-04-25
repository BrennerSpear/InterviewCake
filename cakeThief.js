  var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15},
    // {weight: 0, value: 1}
]

var capacity = 20

const weightless = function (cakeTypes) {
  for(var i=0; i < cakeTypes.length; i++) {
    if(cakeTypes[i].weight < 1 && cakeTypes[i].value > 0) {return true}
  }
  return false
}


const maxDuffelBagValue = function (cakeTypes, capacity) {
  if(weightless(cakeTypes)) return Number.POSITIVE_INFINITY
  if(capacity < 1) return 0

  var maxValueAtCapacity = []
  for(var i=0; i<= capacity; i++) {
    maxValueAtCapacity[i] = 0
  }

  for(var currentCapacity = 1; currentCapacity <= capacity; currentCapacity++) {
    cakeTypes.forEach(cake => {
      if(currentCapacity >= cake.weight) {
        var capacityLeft = currentCapacity - cake.weight
        var possibleValue = cake.value + maxValueAtCapacity[capacityLeft]
        maxValueAtCapacity[currentCapacity] = Math.max(maxValueAtCapacity[currentCapacity], possibleValue)
      }  
    })
  }
  console.log(maxValueAtCapacity)
  return maxValueAtCapacity[capacity]

}




console.log(maxDuffelBagValue(cakeTypes, capacity))