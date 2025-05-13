"use strict"
let SecretNum = Math.trunc(Math.random()*20+1);

let score = 20; 

let highScore = 0

// function setScore(value){
//     const clampedScore = Math.max(-1, Math.min(20, value));
//     return clampedScore

// }

// score = setScore(score)
// console.log(score)


document.querySelector('.check').addEventListener('click',function(){
    const Guess = Number(document.querySelector('.guess').value)

    
    
   
// when there is not input number
if(!Guess){
    document.querySelector('.message').textContent = 'No Number'
}

// when the play is win

else if(Guess === SecretNum){
    document.querySelector('.message').textContent = "Correct Number!"
    document.querySelector('.number').textContent = SecretNum
    document.querySelector('.message').textContent = alert ('🏆 You won');
    document.querySelector('.container').style.backgroundColor = '#ffff7f';
    document.querySelector('.number').style.display = 'block';

    if(score > highScore){
        highScore = score;
        document.querySelector('.Highscore').textContent = highScore
    }
}

// when the number too high
else if (Guess > SecretNum){
    if(score > 1){
        document.querySelector('.message').textContent = "Too High";
        score--;
        document.querySelector('.score').textContent = score
    }

    else{
        document.querySelector('.message').textContent = alert('😭 You lost the Game')
        document.querySelector('.message').textContent = "You lost the Game";
        document.querySelector('.score').textContent = 0
    }
}

else if (Guess < SecretNum){
    if(score > 1){
        document.querySelector('.message').textContent = "Too Low";
        score--;
        document.querySelector('.score').textContent = score
    }
    else{
        document.querySelector('.message').textContent = alert('😭 You lost the Game')
        document.querySelector('.message').textContent = "You lost the Game";
        document.querySelector('.score').textContent = 0
    }
}


})

document.querySelector('.again').addEventListener('click', function(){
   SecretNum = Math.trunc(Math.random() * 20 + 1)
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('.number').textContent = '';
    document.querySelector('.number').textContent = '';
    document.querySelector('.guess').value = ''
    document.querySelector('.container').style.backgroundColor = 'rgb(211, 188, 10)'
    document.querySelector('.number').style.display = 'none',
    document.querySelector('.Highscore').textContent = 0,
    document.querySelector('.score').textContent = 0;

    
})



