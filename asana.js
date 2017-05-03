var findStartPoint = function(matrix) {
  var row
  var column

  var rowOption1
  var rowOption2

  var columnOption1
  var columnOption2

  //find starting row
  if(matrix.length % 2 !== 0) {
    row = Math.floor(matrix.length/2)
  }
  else {
    rowOption1 = (matrix.length/2 - 1)
    rowOption2 = (matrix.length/2)
  }

  //find starting column
  if(matrix[0].length % 2 !== 0) {
    column = Math.floor(matrix[0].length/2)
  }
  else {
    columnOption1 = (matrix[0].length/2 - 1)
    columnOption2 = (matrix[0].length/2)
  }

  if(row && column) {
    console.log('row+col', row, column)
    return [row, column]
  }
  //find max between two column options
  if(row) {
    console.log('row+col', row, column)
    column = (matrix[row][columnOption1] > matrix[row][columnOption2]) ? columnOption1 : columnOption2
    return [row, column]
  }
  //find max between two column options
  if(column) {
    console.log('row+col', row, column)
    row = (matrix[rowOption1][column] > matrix[rowOption2][column]) ? rowOption1 : rowOption2
    return [row, column]
  }
  //find max between 4 options
  else {
    var option1 = matrix[rowOption1][columnOption1]
    var option2 = matrix[rowOption1][columnOption2]
    var option3 = matrix[rowOption2][columnOption1]
    var option4 = matrix[rowOption2][columnOption2]

    var max = option1

    row = rowOption1
    column = columnOption1

    //try each one, updating max and row/column index
    if(option2 > max) {
      max = option2
      row = rowOption1
      column = columnOption2
    }
    if(option3 > max) {
      max = option3
      row = rowOption2
      column = columnOption1
    }
    if(option4 > max) {
      max = option4
      row = rowOption2
      column = columnOption2
    }

    return [row, column]
  }
}

//mutates matrix
var eatCarrot = function(matrix, row, column) {
  var carrotValue = matrix[row][column]
  matrix[row][column] = 0
  return carrotValue
}

//check if the very hungry rabbit should sleep or not
var carrotsAvailable = function(matrix, row, column) {
  var totalCarrots = 0

  if(matrix[row+1]) {
    totalCarrots += matrix[row+1][column]
  }
  if(matrix[row][column+1]) {
    totalCarrots += matrix[row][column+1]
  }
  if(matrix[row-1]) {
    totalCarrots += matrix[row-1][column]
  }
  if(matrix[row][column-1]) {
    totalCarrots += matrix[row][column-1]
  }
  return totalCarrots > 0 ? true : false
}


var findMostCarrots = function(matrix, row, column) {
  var up = 0
  var right = 0
  var down = 0
  var left = 0
  
  var max
  var newRow
  var newColumn

  //get adjacent values
  if(matrix[row+1]) {
    up = matrix[row+1][column]
  }
  if(matrix[row][column+1]) {
    right = matrix[row][column+1]
  }
  if(matrix[row-1]) {
    down = matrix[row-1][column]
  }
  if(matrix[row][column-1]) {
    left = matrix[row][column-1]
  }

  //find row&column of max carrot value
  max = up
  newRow = row+1
  newColumn = column

  if(right > max) {
    max = right
    newRow = row
    newColumn = column+1
  }
  if(down > max) {
    max = down
    newRow = row-1
    newColumn = column
  }
  if(left > max) {
    max = left
    newRow = row
    newColumn = column-1
  }

  return [newRow, newColumn]

}

//mutates matrix
var eatCarrots = function(matrix) {
  if(matrix.length===1 && matrix[0].length === 1) {return matrix[0][0]}

  var carrotCount = 0

  var [row, column] = findStartPoint(matrix)

  carrotCount += eatCarrot(matrix, row, column)

  while(carrotsAvailable(matrix, row, column)) {
    [row, column] = findMostCarrots(matrix, row, column)
    carrotCount += eatCarrot(matrix, row, column)

  }

  return carrotCount
}


var matrix = [
[2,5,3,0],
[3,9,6,7],
[2,0,6,2],
[4,0,7,0]]

console.log(eatCarrots(matrix))