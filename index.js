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
    const winner = playerCount > computerCount ? 'You!!! Great Job' : 'Computer wins'
    roundDisplay.classList.remove('show')
    scoreDisplay.classList.remove('show')
    winnerMessage.innerHTML = `<h2>We got a winner: ${winner}</h2>`
    winnerMessage.classList.add('show')
  }
}

const playRoundWith = (playersChoice) => {
  actionMessage.classList.add('hide')
  const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
  }
  const computerPick = computerPlay()
  const playerPick = playersChoice

  playerRoundPlay.textContent = playerPick
  computerRoundPlay.textContent = computerPick

  roundDisplay.classList.add('show')

  console.log(playerCount)
  console.log(computerCount)

  if (playerPick === 'rock' && computerPick === 'rock') {
    return "It's a tie!!! Try again"
  } else if (playerPick === 'rock' && computerPick === 'paper') {
    computerCount++
    computerScore.textContent = computerCount
    return 'You lose! Paper beats rock'
  } else if (playerPick === 'rock' && computerPick === 'scissors') {
    playerCount++
    playerScore.textContent = playerCount
    return 'You win! Rock beats scissors'
  } else if (playerPick === 'paper' && computerPick === 'paper') {
    return "It's a tie!!! Try again"
  } else if (playerPick === 'paper' && computerPick === 'rock') {
    playerCount++
    playerScore.textContent = playerCount
    return 'You win! Paper beats rock'
  } else if (playerPick === 'paper' && computerPick === 'scissors') {
    computerCount++
    computerScore.textContent = computerCount
    return 'You lose! scissors beats paper'
  } else if (playerPick === 'scissors' && computerPick === 'scissors') {
    return "It's a tie!!! Try again"
  } else if (playerPick === 'scissors' && computerPick === 'rock') {
    computerCount++
    computerScore.textContent = computerCount
    return 'You lose! rock beats scissors'
  } else if (playerPick === 'scissors' && computerPick === 'paper') {
    playerCount++
    playerScore.textContent = playerCount
    return 'You win! scissors beats paper'
  } else {
    return 'something went wrong!!!!'
  }
}

const initiateRound = () => {
  playerCount = 0
  computerCount = 0

  playerScore.textContent = playerCount
  computerScore.textContent = computerCount

  playerRoundPlay.textContent = ''
  computerRoundPlay.textContent = ''

  winnerMessage.textContent = ''

  startBtn.classList.add('hide')
  scoreDisplay.classList.add('show')
  roundMessage.classList.add('show')

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
