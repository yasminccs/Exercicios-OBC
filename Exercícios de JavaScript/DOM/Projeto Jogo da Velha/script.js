const X_CLASS = 'x'
const CIRCLE_CLASS = 'circle'
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

const body = document.querySelector('body')
const root = document.querySelector(':root')
const cellElements = document.querySelectorAll('[data-cell]')
const board = document.getElementById('board')
const winningMessageElement = document.getElementById('winningMessage')
const winningMessageTextElement = document.querySelector('[data-winning-message-text]')
const restartButton = document.getElementById('restartButton')

let score = 1

let circleTurn //define o turno do personagem (X ou O)

function fecho() {
  const boxFeedback = document.getElementById('boxFeedback')
  boxFeedback.style.display = 'none'
}

startGame()

restartButton.addEventListener('click', startGame)

function startGame() {
  circleTurn = false //dizer q vai começar com X e não O
  cellElements.forEach(cell => {
    cell.classList.remove(X_CLASS) //remover os X do jogo anterior 
    cell.classList.remove(CIRCLE_CLASS) //remover os O do jogo anterior
    // cell.removeEventListener('click', handleClick)
    cell.addEventListener('click', handleClick) 
    //, { once: true }
  })
  setBoardHoverClass() //é a sombra que aparece quando passe o mouse pela célula
  winningMessageElement.classList.remove('show') //remove com a mensagem de vencedor ao clicar
}

function handleClick(e) { //lida com os cliques
  const cell = e.target
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS // se circleTurn for true = O, se não false = X

  placeMark(cell, currentClass) //coloca o personagem na célula ao clicar

  if (checkWin(currentClass)) {// checkWin verifica se no tabulueiro há alguma daquelas combinações e vê se quem fez foi X ou O, dessa forma, determinando quem ganhou
    endGame(false)
  } else if (isDraw()) {
    endGame(true) //retorna empate
  } else { //em caso do jogo ainda não ter terminado
    swapTurns() //troca os turnos após o personagem ser colocado na célula
    setBoardHoverClass() //é a sombra que aparece quando passe o mouse pela célula
  }
}

function endGame(draw) { //função que encerra o jogo mostrando a mensagem
  const scoreEmpate = document.querySelector('#pt2')
  const scorePlayer1 = document.querySelector('#pt1')
  const scorePlayer2 = document.querySelector('#pt3')
  if (draw) {
    winningMessageTextElement.innerText = 'Empate!'
    scoreEmpate.innerHTML = score
  } else {
    winningMessageTextElement.innerText = `${circleTurn ? `Jogador "O"` : `Jogador "X"`} ganhou!`
    if(circleTurn){
      scorePlayer2.innerHTML = score
    } else {
      scorePlayer1.innerHTML = score
    }
  }
  winningMessageElement.classList.add('show')
  score++
}

function isDraw() { //função que retorna se deu empate
  return [...cellElements].every(cell => {
    return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
  })
}

function placeMark(cell, currentClass) { //coloca o personagem na célula ao clicar
  cell.classList.add(currentClass)
}

function swapTurns() { //troca os turnos após o personagem ser colocado na célula
  circleTurn = !circleTurn
}

function setBoardHoverClass() { //é a sombra que aparece quando passe o mouse pela célula
  board.classList.remove(X_CLASS)
  board.classList.remove(CIRCLE_CLASS)
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS)
  } else {
    board.classList.add(X_CLASS)
  }
}

function checkWin(currentClass) { //verifica se no tabulueiro há alguma daquelas combinações
  return WINNING_COMBINATIONS.some(combination => {
    return combination.every(index => {
      return cellElements[index].classList.contains(currentClass)
    })
  })
}

document.getElementById("themeSwitcher").addEventListener('click', function () {
  if (body.dataset.theme === "dark"){
    root.style.setProperty("--bg-color", "#fff")
    root.style.setProperty("--color", "#000")
    root.style.setProperty("--shadow", "#d0cccc")
    body.dataset.theme = "light"
  } else {
    root.style.setProperty("--bg-color", "#000")
    root.style.setProperty("--color", "#fff")
    root.style.setProperty("--shadow", "#686767")
    body.dataset.theme = "dark"
  }
})