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
        lists.forEach((item)=> item.classList.add('show'))

    }
    else{
        menuList.classList.remove('show');
        lists.forEach((item)=> item.classList.remove('show'))
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