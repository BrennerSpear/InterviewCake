  const words = [// <-- rotates here!
    'karpatka',
    'othellolagkage',
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote',
    'babka',
    'banoffee',
    'engender'

];


var findRotationPoint = function(arr) {
    var left = 0
    var right = arr.length-1
    var middle
    var leftWord
    var rightWord
    var currentWord

    while(left < right) {
        middle = Math.floor((left+right)/2)
        currentWord = arr[middle]
        leftWord = arr[left]
        rightWord = arr[right]

        console.log('left:', left)
        console.log('middle:', middle)
        console.log('right:', right, '\n')
        if(leftWord < currentWord) {
            left = middle
        }
        else {
            right = middle
        }
    }

    return middle+1
}


console.log(findRotationPoint(words))