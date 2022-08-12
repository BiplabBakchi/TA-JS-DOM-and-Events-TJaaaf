let playerPoint = document.querySelector('.player');
let computerPoint = document.querySelector('.computer');
let playerBtn = document.querySelectorAll
('.manual');
let result = document.querySelector('h3');
let player;
let computer;

playerBtn.forEach(ele => {
    ele.addEventListener('click', (event) => {
       player = event.target.dataset.selection;
        computerTurn();
    })
 
    result.innerText = checkwinner()

})

function computerTurn() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch(randomNum) {
        case 1: 
            computer = "rock";
        break;
        case 2: 
            computer = "paper";
        break;
        case 3: 
            computer = "scissors";
        break;
    }
}

function checkwinner() {
    if (player == computer) {
        return "Draw";
    }else if (computer = "rock") {
        return(player = "paper") ? 'You win' : 'You lose';
    }else if (computer = "paper") {
        return(player = "scissors") ? 'You win' : 'You lose';
    }else if (computer = "scissors") {
        return(player = "rock") ? 'You win' : 'You lose';
    }
}
