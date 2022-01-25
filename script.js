// Themes
const DARK_THEME = 'dark'
const LIGHT_THEME = 'light'

// Dom elements
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
      toggleDarkLightMode(true)
    }
  }
});

const setImagesMode = (mode) => {
  image1.src = `img/undraw_feeling_proud_${mode}.svg`
  image2.src = `img/undraw_conceptual_idea_${mode}.svg`
  image3.src = `img/undraw_proud_coder_${mode}.svg`
}

toggleDarkLightMode = theme => {
  const isDarkTheme = theme === DARK_THEME
  nav.style.backgroundColor = isDarkTheme ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
  textBox.style.backgroundColor = isDarkTheme ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = isDarkTheme ? 'Dark mode' : 'Light mode'
  isDarkTheme
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')

    isDarkTheme ? setImagesMode(DARK_THEME) : setImagesMode(LIGHT_THEME)
}

const switchTheme = e => {
  if (e.target.checked) {
    window.localStorage.setItem('theme', DARK_THEME)
    document.documentElement.setAttribute('data-theme', DARK_THEME)
    toggleDarkLightMode(DARK_THEME)
  } else {
    window.localStorage.setItem('theme', LIGHT_THEME)
    document.documentElement.setAttribute('data-theme', LIGHT_THEME)
    toggleDarkLightMode(LIGHT_THEME)
  }
}

toggleSwitch.addEventListener('change', switchTheme)