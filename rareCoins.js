// var makeChange = function (amount, coins) {
//   var changeOptions = []

//   //sort coins - largest first

//   //function amountLeft, coinsLeft, currentArrayOfCoins
//     //loop through each
//       //amountLeft - coin[i]
//       //if 0, push to change Options

//       //else
//         //add coin used to current array of coins
//         //recurse (amount left, coinsLeft(current coin & smaller only), currentArrayOf Coins )


//   //return changeOptions
// }

var numSortReverse = function(a,b) {return b-a}
var numSort = function(a,b) {return a-b}

var makeChange2 = function (amount, coins) {
  var changeOptions = []
  var newCoins = coins.slice().sort(numSortReverse)

  var addCoin = function(amountLeft, coinOptions, coinsUsed) {
    for(var i=0; i < coinOptions.length; i++) {
      // console.log('checking ways to make', amountLeft, 'with', coinOptions)
      var coin = coinOptions[i]
      // console.log('can we use coin:', coin, '?')
      var newCoinsUsed = coinsUsed.slice()
      newCoinsUsed.push(coin)
      var newAmountLeft = amountLeft - coin

      if(newAmountLeft===0) {
        changeOptions.push(newCoinsUsed)
      }
      if(newAmountLeft>0) {
        // console.log('yes we can!')
        var newCoinOptions = coinOptions.slice(i)
        addCoin(newAmountLeft, newCoinOptions, newCoinsUsed)
      }
    }
  }
  addCoin(amount, newCoins, [])
  console.log(changeOptions)
  return changeOptions.length
}


var makeChange = function(amount, coins) {
  coins = coins.sort(numSort)
  var memo = {0:1}

  for(var c=0; c<coins.length; c++) {
    var coin = coins[c]
    for(var i=1; i <= amount; i++) {
      var amountLeft = i - coin
      memo[i] = amountLeft >= 0 ? memo[i] + memo[amountLeft] || memo[amountLeft] : memo[i] || 0
    }
  }
  console.log(memo)
  return memo[amount]
}

var a = makeChange(30, [2,3,4,5,6])
console.log(a)


// 6, [1,2,5,6]
//{ '1': 1, '2': 2, '3': 3, '4': 5, '5': 9, '6': 16 }
//{ '1': 1, '2': 2, '3': 3, '4': 3, '5': 9, '6': 16 }


















