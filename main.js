let button = document.querySelector('#no')
let height = window.innerHeight - 50
let width = window.innerWidth - 50

button.addEventListener('mouseover', () => {
  button.style.position = 'absolute'
  button.style.top = Math.random() * height + "px"
  button.style.left = Math.random() * width + "px"
})