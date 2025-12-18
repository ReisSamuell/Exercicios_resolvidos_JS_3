const bodyTheme = document.querySelector('body')
const root = document.querySelector(':root')
let boardRegions = document.querySelectorAll('#gameBoard span')
const start = document.getElementById('start')
const virtualBoard = []
let turnPlayer = ''
let poitsPlayer1 = document.getElementById('pointsP1')
let poitsPlayer2 = document.getElementById('pointsP2')
let calc1 = 0
let calc2 = 0

function playerTime() {
   const p1 = document.getElementById('player1').value.trim()
   const p2 = document.getElementById('player2').value.trim()
   // Define o jogador inicial se ainda não definido, preferindo p1
   if (!turnPlayer) { // verifica se está vazio, null, undefined NaN,OU false, se for alguma dessas coisas retorna true
      turnPlayer = p1
   } else {
      // Alterna entre p1 e p2
      turnPlayer = (turnPlayer === p1) ? p2 : p1
   }
   const timeToPlay = document.getElementById('turnPlayer')
   if (timeToPlay) timeToPlay.innerText = turnPlayer //verifica se a const timeToPlay não é null ou undefined
   return turnPlayer
} 

function checkWinner() {
   const winningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
   ]

   for (const combo of winningCombos) {
      const [a, b, c] = combo

      if (
         virtualBoard[a] &&
         virtualBoard[a] === virtualBoard[b] &&
         virtualBoard[a] === virtualBoard[c]
      ) {
         return virtualBoard[a] // retorna 'X' ou 'O'
      }
   }

   return null // ninguém ganhou ainda
}


start.addEventListener('click', function(){
   playerTime()
   // limpa todas as células do tabuleiro (spans)
   boardRegions.forEach(cell => {
      cell.innerText = ''
      cell.classList.remove('x','o')
   })
   // reseta o virtualBoard
   for (let i = 0; i < 9; i++) {
      virtualBoard[i] = ''
   }
})


// Adiciona listener em cada célula do tabuleiro
boardRegions.forEach((cell, i) => {
   cell.dataset.index = i
   cell.addEventListener('click', function(ev) {
      const span = ev.currentTarget
      // se já tiver marca, não faz nada
      if (span.innerText) return

      // garante que exista um jogador inicial
      if (!turnPlayer) playerTime()
      const player = turnPlayer

      // define símbolo com base no jogador (X para player1, O para player2)
      const p1 = document.getElementById('player1').value.trim()
      const p2 = document.getElementById('player2').value.trim()
      const symbol = (player === p1) ? 'X' : 'O'

      // marca a célula e atualiza estilização/estado
      span.innerText = symbol
      span.classList.add(symbol === 'X' ? 'x' : 'o')
      virtualBoard[i] = symbol

      const winner = checkWinner()

      if (winner === 'X'){
         alert("O jogador " + p1 + " Ganhou essa rodada")
         calc1 += 1
         poitsPlayer1.innerText = calc1
      }else if (winner === 'O'){
         alert("O jogador " + p2 + " Ganhou essa rodada")
         calc2 += 1
         poitsPlayer2.innerText = calc2
      }

      if (!virtualBoard.includes('')) {
       alert('Empate!')
      }

      // alterna jogador para o próximo turno e atualiza display
      playerTime()
   })
})

document.getElementById('switchTheme').addEventListener('click', function (){
     if (bodyTheme.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f0f2f3')
        root.style.setProperty('--letter-color', '#333333ff')
        root.style.setProperty('--hover-color', '#777676ff')
        bodyTheme.dataset.theme = 'light'
     }else{
        root.style.setProperty('--bg-color', '#232323')
        root.style.setProperty('--letter-color', '#f8f8f8ff')
        root.style.setProperty('--hover-color', '#c2c2c2')
        bodyTheme.dataset.theme = 'dark'
     }
})