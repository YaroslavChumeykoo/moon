const but_menu = document.querySelector('.but_menu')
const main = document.querySelector('.main')
const menu = document.querySelector('.menu')
const moon = document.querySelector('.moon')
const logo = document.querySelector('.logo')


but_menu.addEventListener('click', clickMenu)
moon.addEventListener('click', clickMenu)
logo.addEventListener('click', goMain)

function clickMenu(){
    main.classList.toggle('none')
    menu.classList.toggle('none')
}
function goMain(){
    main.classList.remove('none')
    menu.classList.add('none')
}