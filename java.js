//랜덤번호 만들기
// 유저 번호 가지고 와서 GO버튼 누르면 랜덤 번호 비교 결과 알려주기 기회는 5번
// 리셋버튼 활성 
// 1~100 사이번호만 가능 기회는 깍지 않는다 
// 중복 번호 제외 
let playButton = document.getElementById("play-button")
let inputArea = document.getElementById("input-area")
let resultArea = document.getElementById("result-area")
let resetButton = document.getElementById("reset-button")
let chanceArea = document.getElementById("chance-area")

let chance =5
let history = []

playButton.addEventListener("click", playGo)
resetButton.addEventListener("click", tryAgain)
inputArea.addEventListener("focus", function(){inputArea.value = ""})

function randomPick () {
    comPicNum = Math.floor(Math.random()*100)+1
    console.log("정답", comPicNum)
}

function playGo () {

    if (inputArea.value < 1 || inputArea.value > 100) {
        resultArea.textContent = " 1~100 사이의 숫자만 넣어주세요"
        return
    }

    if (history.includes(inputArea.value)){
        resultArea.textContent = "이미 시도한 번호입니다 다른번호 넣어주세요"
        return

        //따로 return 하는게 하니라 한줄에 
        // return resultArea.textContent = "이미 시도한 번호입니다 다른번호 넣어주세요" 로 해도 되는데 
    }
    chance --
    chanceArea.textContent = `남은 기회는 : ${chance}번`
    if (chance < 1) {
        resultArea.textContent = "sorry try again"
        playButton.disabled = true
    }



    if(inputArea.value < comPicNum) {
        resultArea.textContent = "UP"
    }else if (inputArea.value > comPicNum) {
        resultArea.textContent = "Down"
    }else if (inputArea.value == comPicNum){
        resultArea.textContent = "Congratulation your are correct!!"
        playButton.disabled = true
    }

    history.push(inputArea.value)
    console.log(history)
}

function tryAgain () {
    resultArea.textContent = "결과가 여기 나온다"
    chance =5
    chanceArea.textContent = `남은 기회는 : ${chance}번`
    playButton.disabled = false
    inputArea.value = ""
    history = []
    randomPick()
}

randomPick()