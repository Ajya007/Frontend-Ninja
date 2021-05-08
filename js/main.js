const hamburger=document.querySelector(".menu-btn");
const menuList=document.querySelector(".menu-list");
const lists=document.querySelectorAll(".lists");
const contactOpen=document.querySelector("#contact");
const contact=document.querySelector(".contact");
const contactClose=document.querySelector(".btn-3");

hamburger.addEventListener('click',toggleMenu);

let showMenu=false;

function toggleMenu(){
    showMenu=!showMenu
    if(showMenu){
        menuList.classList.add('show');
        hamburger.classList.add('close')

    }
    else{
        menuList.classList.remove('show');
        hamburger.classList.remove('close')
    }

}

lists.forEach((item)=> item.addEventListener("click", toggleMenu));



contactOpen.addEventListener('click',() =>{
    contact.classList.add('show');
});

contactClose.addEventListener('click',() =>{
    contact.classList.remove('show');
});