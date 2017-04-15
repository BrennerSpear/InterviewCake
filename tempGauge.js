var TempTracker = function () {
  this.temperatureCount = 0
  this.modeCounter = {}
  this.max = null
  this.min = null
  this.mean = null
  this.mode = null
}


var setMean = function(val, mean, tempCount) {
  // var mean = mean || 0
  // var difference = mean - val
  // var newMean = mean - difference/tempCount
  // return newMean
  return mean ? mean - ((mean-val)/tempCount) : val
}

var setMode = function(val, modeCounter, mode) {
  modeCounter[val] = modeCounter[val] + 1 || 1
  //if(mode === null) {return val}
  // return modeCounter[val] > modeCounter[mode] ? val : mode
  return (modeCounter[val] > modeCounter[mode] || mode === null) ? val : mode
}



TempTracker.prototype.insert = function(val) {
  this.temperatureCount++
  this.max = Math.max(val, this.max)
  this.min = this.min === null ? val : Math.min(val, this.min)
  this.mean = setMean(val, this.mean, this.temperatureCount)
  this.mode = setMode(val, this.modeCounter, this.mode)
};


TempTracker.prototype.getMax = function() {
  return this.max
};

TempTracker.prototype.getMin = function() {
  return this.min
};

TempTracker.prototype.getMean = function() {
  return this.mean
};

TempTracker.prototype.getMode = function() {
  return this.mode
};
var tt = new TempTracker()

tt.insert(6)
tt.insert(5)
tt.insert(4)
tt.insert(3)
tt.insert(6)
tt.insert(3)
tt.insert(3)

console.log('max:', tt.getMax())
console.log('min:', tt.getMin())
console.log('mean:', tt.getMean())
console.log('mode:', tt.getMode())
