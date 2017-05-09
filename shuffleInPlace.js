function shuffle(arr) {
  var random
  for(var i=arr.length-1; i>=0; i--) {
    random = Math.floor(Math.random() * i)
    temp = arr[random]
    arr[random] = arr[i]
    arr[i] = temp
  }
  return arr
}


// function getRandom(floor, ceiling) {
//   return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
// }

// function shuffle(arr) {

//   for (var i = 0; i < arr.length - 1; i++) {

//     var randomIndex = getRandom(i, arr.length - 1);

//     if (randomIndex !== i) {
//       var value = arr[i];
//       arr[i] = arr[randomIndex];
//       arr[randomIndex] = value;
//     }
//   }
// }


console.log(shuffle([1,2,3,4,5,6,7,8,9]))