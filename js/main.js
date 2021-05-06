const hamburger=document.querySelector(".menu-btn");
const menuList=document.querySelector(".menu-list");
const lists=document.querySelectorAll(".lists")

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