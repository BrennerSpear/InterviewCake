var stockPricesYesterday = [10, 7, 5, 8, 11, 9];


var getMaxProfit = function(a) {

  var maxDiff = -1
  var min = a[0]

  for(var i=1; i < a.length; i++) {
    min = Math.min(a[i], min)
    maxDiff = Math.max(a[i] - min, maxDiff)
  }

  return maxDiff
}

console.log(getMaxProfit(stockPricesYesterday))
// returns 6 (buying for $5 and selling for $11)