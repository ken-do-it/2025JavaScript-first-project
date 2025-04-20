let goButton = document.getElementById("go-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")


goButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)

let chance = 5

//1. 
// function randomPickNum1 () {
//     randomnum1 = Math.floor(Math.random()*100)+1
//     console.log("정답", randomnum1)
// }

// randomPickNum1()


//2.

// function randomPickNum2 () {
//     randomnum2 = Math.floor(Math.random()*100)+1
//     return randomnum2
// }

// console.log("정답", randomPickNum2())

//3. AI가 추천하는 방식 
function randomPickNum3 (){
  return Math.floor(Math.random()*100)+1
}

let randomnum3 =randomPickNum3()
console.log("정답", randomnum3)


// play 함수 
function play () {

    chance --
    chanceArea.textContent = `남은기회는 ${chance}번`
    if (chance < 1) {
        goButton.disabled = true
    }
    
    userPicNum =  userInput.value
    if (userPicNum < randomnum3) {
     return resultArea.textContent = "Up!!"
    }  else if (userPicNum > randomnum3) {
     return resultArea.textContent = "Down!!"
    } else if (userPicNum == randomnum3) {
     return resultArea.textContent = " correct!!"
    }
 }

function reset () {
    console.log ("정답",randomPickNum3())
    resultArea.textContent = "결과값은 여기 "
    chance = 5
    chanceArea.textContent = `남은기회는 ${chance}번`
    goButton.disabled = false
}



