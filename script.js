
  const one = document.getElementById('tileOne')
  const two = document.getElementById('tileTwo')
  const three = document.getElementById('tileThree')
  const four = document.getElementById('tileFour')
  const five = document.getElementById('tileFive')
  const six = document.getElementById('tileSix')
  const newGame = document.getElementById('newGame')
  const easy = document.getElementById('easy')
  const hard = document.getElementById('hard')
  const title = document.getElementById('title')

  let dificulty = true
  let colors = [one, two, three, four, five, six]
  let winningColor
  let red
  let green
  let blue

  const randomColorWin = () => {
    winningColor = Math.floor(Math.random() * 6)
    red = Math.floor(Math.random() * 256)
    green = Math.floor(Math.random() * 256)
    blue = Math.floor(Math.random() * 256)
    colors[winningColor].style.background = `rgb(${red},${green},${blue})`
    title.innerText = `RGB(${red},${green},${blue})`
  }

  const easyMode = () => {
    randomColorWin()
    for (let index = 0; index < colors.length; index++) {
      if (colors[winningColor] != colors[index]) colors[index].style.background = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    }
  }

  const hardMode = () => {
    randomColorWin()
    let redH
    let blueH
    let greenH
    for (let index = 0; index < colors.length; index++) {
      redH = red + ((Math.floor(Math.random() * 50)) * (Math.round(Math.random()) * 2 - 1))
      blueH = blue + ((Math.floor(Math.random() * 50)) * (Math.round(Math.random()) * 2 - 1))
      greenH = green + ((Math.floor(Math.random() * 50)) * (Math.round(Math.random()) * 2 - 1))
      if (colors[winningColor] != colors[index]) {
        colors[index].style.background = `rgb(${redH},${greenH},${blueH})`
      }
    }
  }

  const setDificulty = (x) => {
    dificulty = x
    if (dificulty) {
      easy.classList.add('clicked')
      hard.classList.remove('clicked')
      easyMode()
    } else {
      hard.classList.add('clicked')
      easy.classList.remove('clicked')
      hardMode()
    }
  }

  const whichMode = () => {
    dificulty ? easyMode() : hardMode()
  }

  newGame.addEventListener("click", whichMode)
  easy.addEventListener("click", () => setDificulty(true))
  hard.addEventListener("click", () => setDificulty(false))

  easyMode()

colors.forEach(e=>{
  e.addEventListener('click',()=>win(e.id))
})

const win = (id) => {
  colors[winningColor].id==id ? window.alert("Won!") :window.alert("Lost!")
  whichMode()
}
