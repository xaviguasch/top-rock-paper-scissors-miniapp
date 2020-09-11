const gameOptions = ['rock', 'scissors', 'paper']
let playerCount = 0
let computerCount = 0
const rounds = 6

const playRound = () => {
  const playerPick = prompt('pick paper, scissors or rock!').toLowerCase()

  const computerPlay = () => {
    return gameOptions[Math.floor(Math.random() * gameOptions.length)]
  }

  const computerPlayResult = computerPlay()

  if (playerPick === 'rock' && computerPlayResult === 'rock') {
    return "It's a tie!!! Try again"
  } else if (playerPick === 'rock' && computerPlayResult === 'paper') {
    computerCount++
    return 'You lose! Paper beats rock'
  } else if (playerPick === 'rock' && computerPlayResult === 'scissors') {
    playerCount++
    return 'You win! Rock beats scissors'
  } else if (playerPick === 'paper' && computerPlayResult === 'paper') {
    return "It's a tie!!! Try again"
  } else if (playerPick === 'paper' && computerPlayResult === 'rock') {
    playerCount++
    return 'You win! Paper beats rock'
  } else if (playerPick === 'paper' && computerPlayResult === 'scissors') {
    computerCount++
    return 'You lose! scissors beats paper'
  } else if (playerPick === 'scissors' && computerPlayResult === 'scissors') {
    return "It's a tie!!! Try again"
  } else if (playerPick === 'scissors' && computerPlayResult === 'rock') {
    computerCount++
    return 'You lose! rock beats scissors'
  } else if (playerPick === 'scissors' && computerPlayResult === 'paper') {
    playerCount++
    return 'You win! scissors beats paper'
  } else {
    return 'something went wrong!!!!'
  }
}

const game = () => {
  playRound()
  console.log(`player count: ${playerCount}`)
  console.log(`computer count: ${computerCount}`)
  if (playerCount >= 3 || computerCount >= 3) {
    console.log('we got a winner')
  } else {
    game()
  }
}

// game()
