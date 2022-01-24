const toggleSwitch = document.querySelector('input[type="checkbox"]')
const nav = document.getElementById('nav')
const toggleIcon = document.getElementById('toggle-icon')
const image1 = document.getElementById('image1')
const image2 = document.getElementById('image2')
const image3 = document.getElementById('image3')
const textBox = document.getElementById('text-box')

let theme = window.localStorage.getItem('theme') || 'light'

window.addEventListener('DOMContentLoaded', (event) => {

  if (theme) {
    document.documentElement.setAttribute('data-theme', theme)
    if (theme === 'dark') {
      toggleSwitch.checked = true
      darkMode()
    }
  }
});

const setImagesMode = (mode) => {
  image1.src = `img/undraw_feeling_proud_${mode}.svg`
  image2.src = `img/undraw_conceptual_idea_${mode}.svg`
  image3.src = `img/undraw_proud_coder_${mode}.svg`
}

// Dark mode
const darkMode = () => {
  nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  toggleIcon.children[0].textContent = 'Dark mode'
  toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
  setImagesMode('dark')
}

// Light mode
const lightMode = () => {
  nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
  textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = 'Light mode'
  toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
  setImagesMode('light')
}

const switchTheme = e => {
  if (e.target.checked) {
    window.localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    darkMode()
  } else {
    window.localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
    lightMode()
  }
}

toggleSwitch.addEventListener('change', switchTheme)