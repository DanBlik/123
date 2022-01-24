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

toggleDarkLightMode = isDark => {
  nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)'
  textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)'
  toggleIcon.children[0].textContent = isDark ? 'Dark mode' : 'Light mode'
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')

  isDark ? setImagesMode('dark') : setImagesMode('light')
}

const switchTheme = e => {
  if (e.target.checked) {
    window.localStorage.setItem('theme', 'dark')
    document.documentElement.setAttribute('data-theme', 'dark')
    toggleDarkLightMode(true)
  } else {
    window.localStorage.setItem('theme', 'light')
    document.documentElement.setAttribute('data-theme', 'light')
    toggleDarkLightMode(false)
  }
}

toggleSwitch.addEventListener('change', switchTheme)