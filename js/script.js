const buttonPlay = document.querySelector(".play")
const buttonStop = document.querySelector(".stop")
const buttonPlus = document.querySelector(".plus")
const buttonNegative = document.querySelector(".negative")
const buttonForest = document.querySelector(".forest")
const buttonRain = document.querySelector(".rain")
const buttonCoffe = document.querySelector(".coffe")
const buttonBonfire = document.querySelector(".bonfire")
const minutesDisplay = document.querySelector(".minutes")
const secondsDisplay = document.querySelector(".seconds")
let minutes = Number(minutesDisplay.textContent)
let timerTimerOut

const sound = new Audio()

function countDown() {
    timerTimerOut = setTimeout(function () {
        let minutes = Number(minutesDisplay.textContent)
        let seconds = Number(secondsDisplay.textContent)

        if (minutes <= 0 && seconds <= 0) {
            resetDisplay()
            sound.pause()
            return
        }

        if (seconds <= 0) {
            seconds = 10
            --minutes
        }

        updadeDisplay(minutes, --seconds)
        countDown()
    }, 1000);
}

buttonPlay.addEventListener("click",function () {
    countDown()
    playSound(sound.src)
})

buttonStop.addEventListener("click", function () {
    clearTimeout(timerTimerOut)
    sound.pause()
})

buttonPlus.addEventListener("click", function () {
    timerPlus()
})

buttonNegative.addEventListener("click", function () {
    timerNegative()
})

buttonForest.addEventListener("click", function () {
    playSound("./audio/Floresta.wav")
})

buttonRain.addEventListener("click", function (){
    playSound("./audio/Chuva.wav")
})

buttonCoffe.addEventListener("click", function () {
    playSound("./audio/Cafeteria.wav")
})

buttonBonfire.addEventListener("click", function () {
    playSound("./audio/Lareira.wav")
})

function updadeDisplay(minutes, seconds) {
    minutes = minutes === undefined ? minutes : minutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart(2,"0")
    secondsDisplay.textContent = String(seconds).padStart(2,"0")
}

function playSound(direction) {
    sound.src = direction
    sound.play()
    sound.loop = true
    return sound.src
}

function resetDisplay() {
    clearTimeout(timerTimerOut)
    updadeDisplay(minutes)
}

function timerPlus() {
    minutes += 5
    updadeDisplay(minutes) 
}

function timerNegative() {
    if (minutes <= 0) {
        alert(`Calma amigo! Não conten numeros negativos.`)
        return
    }
    minutes -= 5
    updadeDisplay(minutes) 
}