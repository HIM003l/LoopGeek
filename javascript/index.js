var menu = document.querySelector('#menu-icon');
var navbar = document.querySelector('.navbar');

menu.onclick = function () {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
 nextImage();
},4000)

function nextImage(){
    count++;
    if(count > 4){
     count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}