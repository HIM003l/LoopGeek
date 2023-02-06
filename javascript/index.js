var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menu.onclick = function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};