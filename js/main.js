const choices = document.querySelectorAll('.choice');
const restart = document.querySelector('#restart');
const score = document.getElementById('score');
const result = document.querySelector('#result');
const modal = document.querySelector('.modal');

const scoreboard = {
    player: 0,
    computer: 0,
}

// PLAY GAME ======
const play = (e) => {
    // console.log(e.target.id)
    const playerChoice = e.target.id
    restart.style.display = 'inline-block'  
    const computerChoice = getcomputerChoice();
    const winner = getWinner(playerChoice, computerChoice) 
    console.log(playerChoice, computerChoice, winner); 
    showWinner(winner, computerChoice)
}

const getcomputerChoice = () => {
    const rand = Math.random();
    console.log(rand)
    if(rand <= 0.34) {
        return 'rock'
    }else if (rand <= 0.67) {
        return 'paper'
    }else {
        return 'scissors'
    }
}

const getWinner = (p , c) => {
    if (p === c) {
        return 'draw'
    }else if(p === 'rock') {
        if(c === 'paper') {
            return 'Computer'
        }else {
            return 'Player'
        }
    }else if(p === 'paper') {
        if(c === 'scissors') {
            return 'Computer'
        }else {
            return 'player'
        }
    } else if(p === 'scissors')  {
        if(c === 'rock') {
            return 'computer'
        }else {
            return 'player'
        }
    }  
}


choices.forEach((choice) => {choice.addEventListener('click', play)})

const showWinner = ((winner, computerChoice) => {
    if(winner === 'player') {
        // To increase player's score
        scoreboard.player++

        // modal container manipulation
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `
    }else if(winner === 'computer') {
        // To increase computer's score
        scoreboard.computer++

        // modal container manipulation
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `;

    }else {
        result.innerHTML = `
            <h1>It's a draw 🍌</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong> </p>
        `
    }
    score.innerHTML = `
    <p>player: ${scoreboard.player}</p>
    <p>computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block'
})

// fuction for reset button
function reset() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
        <p>Player : 0</p>
        <p>Computer : 0</p>
    `
}

// clear modal fn
function clearModal(e) {
    if(e.target === modal) {
        modal.style.display = 'none'
    }
}

window.addEventListener('click', clearModal)
restart.addEventListener('click', reset)


 
 