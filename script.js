const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');


openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

var slide = document.getElementById('slide');

var upArrow = document.getElementById('up-arrow');

var downArrow = document.getElementById('down-arrow');

let x = 0;

upArrow.onclick = function() {
    if(x > "-900"){
        x = x - 300;
        slide.style.top = x + 'px';
    }
}

downArrow.onclick = function() {
    if(x < 0){
        x = x + 300;
        slide.style.top = x + 'px';
    }
}