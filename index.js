const rockBtn = document.getElementById('rockBtn')
const paperBtn = document.getElementById('paperBtn')
const scissorsBtn = document.getElementById('scissorsBtn')
const startBtn = document.getElementById('startBtn')

const roundDisplay = document.getElementById('roundDisplay')
const scoreDisplay = document.getElementById('scoreDisplay')
const roundMessage = document.getElementById('roundMessage')
const actionMessage = document.getElementById('actionMessage')
const winnerMessage = document.getElementById('winnerMessage')
const playerRoundPlay = document.getElementById('playerRoundPlay')
const computerRoundPlay = document.getElementById('computerRoundPlay')
const playerScore = document.getElementById('playerScore')
const computerScore = document.getElementById('computerScore')

const gameOptions = ['rock', 'scissors', 'paper']
let playerCount = 0
let computerCount = 0

playerScore.textContent = playerCount
computerScore.textContent = computerCount

const checkWinner = () => {
  if (playerCount >= 3 || computerCount >= 3) {
    const winner = playerCount > computerCount ? 'You!!! Nice' : 'Computer wins'
    generalDisplay.classList.remove('general-display--show')
    winnerMessage.classList.add('winner-message__show')
    winnerMessage.innerHTML = `
      <h3>We got a winner: </h3>
      <h3> ${winner}</h3>
      <p> ${playerCount} - ${computerCount}</p>
    `
  }
}

const playRoundWith = (playersChoice) => {
  const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
  }
  const computerPick = computerPlay()
  const playerPick = playersChoice

  playerRoundPlay.textContent = playerPick
  computerRoundPlay.textContent = computerPick

  roundDisplay.classList.remove('round-display--hide')

  if (playerPick === 'rock' && computerPick === 'rock') {
    actionMessage.textContent = "It's a tie!!! Try again"
    return "It's a tie!!! Try again"
  } else if (playerPick === 'rock' && computerPick === 'paper') {
    computerCount++
    computerScore.textContent = computerCount
    actionMessage.textContent = 'You lose! Paper beats rock'
    return 'You lose! Paper beats rock'
  } else if (playerPick === 'rock' && computerPick === 'scissors') {
    playerCount++
    playerScore.textContent = playerCount
    actionMessage.textContent = 'You win! Rock beats scissors'
    return 'You win! Rock beats scissors'
  } else if (playerPick === 'paper' && computerPick === 'paper') {
    actionMessage.textContent = "It's a tie!!! Try again"
    return "It's a tie!!! Try again"
  } else if (playerPick === 'paper' && computerPick === 'rock') {
    playerCount++
    playerScore.textContent = playerCount
    actionMessage.textContent = 'You win! Paper beats rock'
    return 'You win! Paper beats rock'
  } else if (playerPick === 'paper' && computerPick === 'scissors') {
    computerCount++
    computerScore.textContent = computerCount
    actionMessage.textContent = 'You lose! scissors beats paper'
    return 'You lose! scissors beats paper'
  } else if (playerPick === 'scissors' && computerPick === 'scissors') {
    actionMessage.textContent = "It's a tie!!! Try again"
    actionMessage.textContent = "It's a tie!!! Try again"
    return "It's a tie!!! Try again"
  } else if (playerPick === 'scissors' && computerPick === 'rock') {
    computerCount++
    computerScore.textContent = computerCount
    actionMessage.textContent = 'You win! Rock beats scissors'
    return 'You lose! rock beats scissors'
  } else if (playerPick === 'scissors' && computerPick === 'paper') {
    playerCount++
    playerScore.textContent = playerCount
    actionMessage.textContent = 'You win! scissors beats paper'
    return 'You win! scissors beats paper'
  } else {
    return 'something went wrong!!!!'
  }
}

const initiateRound = () => {
  console.log('play')
  // Resets
  playerCount = 0
  computerCount = 0
  playerScore.textContent = playerCount
  computerScore.textContent = computerCount
  playerRoundPlay.textContent = ''
  computerRoundPlay.textContent = ''

  // CSS hide/display classes
  generalDisplay.classList.add('general-display--show')
  roundDisplay.classList.add('round-display--hide')
  startBtn.classList.add('hide')

  rockBtn.addEventListener('click', () => {
    playRoundWith('rock')
    checkWinner()
  })
  scissorsBtn.addEventListener('click', () => {
    playRoundWith('scissors')
    checkWinner()
  })
  paperBtn.addEventListener('click', () => {
    playRoundWith('paper')
    checkWinner()
  })
}

startBtn.addEventListener('click', initiateRound)
