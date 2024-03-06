const main = document.querySelector('.main')
const logo = document.querySelector('.logo')
const but_about = document.querySelector('.but_about')
const about_Us = document.querySelector('.about_Us')
const body = document.querySelector('body')
const but_menu = document.querySelector('.but_menu')
const menu = document.querySelector('.menu')


but_menu.addEventListener('click', goMenu)
but_about.addEventListener('click', goAbout_Us)
logo.addEventListener('click', goMain)

function goMain(){
    body.style.overflow = 'hidden'
    main.classList.remove('none')
    about_Us.classList.add('none')
    menu.classList.add('none')
}
function goAbout_Us(){
    body.style.overflow = "auto"
    main.classList.add('none')
    about_Us.classList.remove('none')
    menu.classList.add('none')
}
function goMenu(){
    body.style.overflow = "auto"
    main.classList.add('none')
    menu.classList.remove('none')
    about_Us.classList.add('none')
}