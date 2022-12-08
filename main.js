window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 100)
});

/*changing and hidding nav styles*/
const menu =document.querySelector(".nav__menu");

const open = document.querySelector(".open-menu-btn");

const close = document.querySelector(".close-menu-btn");

function open (){
    
    menu.style.display = "block";
    open.style.display = "inline-block";
    close.style.display = "none"

}

open.addEventListener("click", open);

