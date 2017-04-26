const coins = [2,4,7]
const total = 20

var makeChange = function (amount, coinOptions) {
  var amountsArray = Array(amount+1).fill(0)
  amountsArray[0] = 1

  coinOptions.forEach(coin => {
    for(var currentAmount=0; currentAmount<=amount; currentAmount++) {
      if(currentAmount >= coin) {
        var amountLeft = currentAmount - coin
        var numWays = amountsArray[amountLeft]
        amountsArray[currentAmount] += numWays
      }
    }
  })
  return amountsArray
}

console.log(makeChange(total, coins))