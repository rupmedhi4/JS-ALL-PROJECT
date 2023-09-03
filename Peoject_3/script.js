const guessNumber = document.querySelector(".guessField")
const submitBtn = document.querySelector(".guessSubmit")
const previousGuess = document.querySelector(".guesses")
const Guess_Remaining = document.querySelector(".lastResult")
const resultDiv = document.querySelector(".resultParas")
const gameStart = document.querySelector(".gameOverPara")
const number_random = document.querySelector(".random_number")



let numberOfGuess = 10
let guessCount = []
let para = document.createElement("p")


submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    if (numberOfGuess === 0) {
        endGame()
    } else if(guessNumber.value === '' || isNaN(guessNumber.value) || parseInt(guessNumber.value) < 0) {
      alert("please enter a valid number")
    }else{
        guessCount.push(guessNumber.value)
        previousGuess.innerHTML = `${guessCount}`
        numberOfGuess = numberOfGuess - 1
        Guess_Remaining.innerHTML = `${numberOfGuess}`
        guessNumber.value=''
        checkGuess()
    }

})

const checkGuess = () => {
    const randomNumber = Math.floor(Math.random() * 100 + 1)
   
    if( parseInt(guessNumber.value) === randomNumber)  alert("Congrasulation You are win same number you guess")
    number_random.innerHTML =`Random number is : ${randomNumber}`
}

const endGame = ()=>{
    guessNumber.setAttribute("disabled", "")
    submitBtn.setAttribute("disabled", "")
    guessNumber.value =''
    let text = document.createTextNode("your game is over please restart your game")
    para.classList.add("gameOverPara")
    para.style.cursor="pointer"
    para.appendChild(text)
    resultDiv.appendChild(para)

}



para.addEventListener("click", (e)=>{
    e.preventDefault()
    guessNumber.removeAttribute("disabled")
    numberOfGuess=10
    number_random.innerHTML = null
     guessCount =[]
    previousGuess.innerHTML =  `${guessCount}`
    Guess_Remaining.innerHTML = `${numberOfGuess}`
    submitBtn.removeAttribute("disabled")

    resultDiv.removeChild(para)
   
})