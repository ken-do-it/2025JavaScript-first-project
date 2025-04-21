//랜덤번호 만들기
// 유저 번호 가지고 와서 GO버튼 누르면 랜덤 번호 비교 결과 알려주기 기회는 5번
// 리셋버튼 활성 
// 1~100 사이번호만 가능 기회는 깍지 않는다 
// 중복 번호 제외 

let inputNumber = document.getElementById("input-area")
let playButton = document.getElementById("play-button")
let resultArea = document.getElementById("result-area")
let chanceArea = document.getElementById("chance-area")
let resetButton = document.getElementById("reset-button")


playButton.addEventListener("click", play)
resetButton.addEventListener("click", playAgain)
inputNumber.addEventListener("focus", function() {inputNumber.value = ""})

let history =[]

function randomNumber () {
    return randomPickNum =Math.floor(Math.random()*100)+1 
}

let chance = 5

// 플레이 함수 실행
function play () {
    userNumber = inputNumber.value

    if (userNumber < 1 || userNumber > 100) {
        return resultArea.textContent = "please put the number between 1 and 100"
    } 


    if (history.includes(userNumber)) {
        return resultArea.textContent = "이미 입력한 번호입니다 "
    }
    history.push(userNumber) 
    console.log(history)

    chance --;
    chanceArea.textContent = `남은 기회는 : ${chance}번`

    if (chance < 1) {
        playButton.disabled = true
    }

    if (userNumber < randomPickNum ) {
        resultArea.textContent = "Up"
    } else if (userNumber > randomPickNum) {
        resultArea.textContent = "Down"
    } else if (userNumber == randomPickNum) {
        resultArea.textContent = "Congratulation it is Correct "
        playButton.disabled = true
    }




}

    // reset everything 
    function playAgain () {
        console.log("정답", randomNumber())
        chance = 5
        chanceArea.textContent = `남은 기회는 : ${chance}번`
        playButton.disabled = false
        resultArea.textContent = "결과가 여기 나온다"
        inputNumber.value =""
        history = []
    }



console.log("정답", randomNumber())