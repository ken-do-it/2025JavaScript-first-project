let goButton = document.getElementById("go-button")
let userInput = document.getElementById("user-input")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")


goButton.addEventListener("click", play)
resetButton.addEventListener("click", reset)
userInput.addEventListener("focus", function () {userInput.value = ""})

let chance = 5
let history =[]


//1. 
function randomPickNum1 () {
    randomnum1 = Math.floor(Math.random()*100)+1
    console.log("정답", randomnum1)
}

randomPickNum1()


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
    userPicNum = userInput.value
    // let userPicNum = Number(userInput.value) 


    if (history.includes(userPicNum)) {
        resultArea.textContent = "이미 입력한 숫자입니다 다른번호 입력하세요 "
        return
    }

    if (userPicNum < 1 || userPicNum > 100) {
        resultArea.textContent = "1~100 사이의 숫자만 넣어 주세요 "
        return userPicNum = ""
    }

    history.push(userPicNum)
    console.log(" 입력한 값 ", history)

    chanceArea.textContent = `남은기회는 ${chance}번`
    if (chance < 1) {
        goButton.disabled = true
    }
    

    if (userPicNum < randomnum3) {
     return resultArea.textContent = "Up!!"
    }  else if (userPicNum > randomnum3) {
     return resultArea.textContent = "Down!!"
    } else if (userPicNum == randomnum3) {
      resultArea.textContent = " correct!!"
     goButton.disabled = true
     
    }
    
 }




function reset () {
    randomPickNum1()
    // console.log ("정답",randomPickNum1())
    resultArea.textContent = "결과값은 여기 "
    chance = 5
    chanceArea.textContent = `남은기회는 ${chance}번`
    goButton.disabled = false
    userInput.value = ""
    history = []
}



