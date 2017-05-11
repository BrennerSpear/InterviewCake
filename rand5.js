function rand7() {
  return Math.floor(Math.random() * 7)+1
}

function rand5() {
  var answer = 6
  while(answer>5) {
    answer = rand7()
  }

  return answer
}

for (var i = 0; i < 10; i++) {
  console.log(rand5())  
}