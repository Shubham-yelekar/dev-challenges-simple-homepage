// Add some interactivity to the website
console.log("Hello, world!");

const menuBtn =  document.querySelector('.mobile-menu')
const menuBar = document.querySelectorAll('.bar')

const logoLight = document.querySelector('.logo-light')
const logoDark = document.querySelector('.logo-dark')

function toggleMenu(){

}

let defaultMode = 'Light'

function toggleDark(){
  if (defaultMode === 'Light'){

    defaultMode = "Dark"
    console.log(defaultMode)
  } else if (defaultMode === 'Dark'){
    defaultMode = "Light"
    console.log(defaultMode)
  }
}



