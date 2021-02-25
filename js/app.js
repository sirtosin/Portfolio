// game values

let min = 0,
    max = 5,
    winningNum = Math.floor(Math.random() * 6)
    guessLeft = 3

// UI element
const game = document.querySelector('#game'),
     minNum = document.querySelector('.min-num'),
     maxNum = document.querySelector('.max-num'),
     guessBtn = document.querySelector('#guess-btn'),
     guessInput = document.querySelector('#guess-input'),
     message = document.querySelector('.message')

//assign UI min and max
minNum.textContent = min
maxNum.textContent = max

//play again event
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again' || guessLeft === 0){
        location.reload()
    }
})

//listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value)

    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter a number between ${min} and ${max}`, 'red')
    }

    //check if won
    if(guess === winningNum){
        //disabled input
        guessInput.style.backgroundColor = 'lightgreen'
        guessInput.disabled = true
        //change border color
        guessInput.style.borderColor = 'green'
        // set message
        setMessage(`${winningNum} is correct, Nice Job!` , 'green')
        guessBtn.value = 'play again'
        guessBtn.className += 'play-again' 
        alert(`Well-done!!!
        
        Welcome to my Portfolio`)
        window.open("home.html")
    }else{
        
        setMessage(`GAME OVER! the correct number was ${winningNum}` , 'red')
        guessInput.style.backgroundColor = 'cyan'
        guessLeft -= 1
        if(guessLeft === 0){
            //game over -lost
            guessBtn.value = 'play again'
            guessBtn.className += 'play-again' 
            guessInput.disabled = true
            guessBtn.disabled = true

        }else{
            // game continues -answer wrong
            setMessage(`${guess} is not correct, ${guessLeft} guesses left`, 'red')
            guessInput.value = ''
        }   
    }
}) 

//set message
function setMessage(msg , color){
     message.style.color = color
     message.textContent = msg
}
