let menuicon = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

function clickiMenu() {
    if(navbar.style.display == 'block') {
        navbar.style.display = 'none'
    }
    else {
        navbar.style.display = 'block'
    }
}