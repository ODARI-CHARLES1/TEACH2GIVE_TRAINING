const menu_sm=document.querySelector(".menu_sm")
const menu_icon=document.querySelector("#menu_icon")
const menu_links=document.querySelectorAll(".menu_sm_link")
const navigation=document.querySelector(".navigation")

let collapse=false;

menu_icon.addEventListener("click",()=>{
   collapse=!collapse; 
   if(collapse){
        menu_sm.style.display="flex"
        navigation.style.borderBottom="2px solid rgb(236, 15, 15)"
    }
    else{
        menu_sm.style.display="none"
        navigation.style.borderBottom="0px solid rgb(236, 15, 15)"

    }
})

menu_links.forEach(link=>{
    link.onclick=()=>{
       menu_sm.style.display="none"
       collapse=false;
       navigation.style.border="0px solid rgb(236, 15, 15)"
    }
})

window.addEventListener('resize',()=>{
    if(window.innerWidth>1024){
        menu_sm.style.display="none"
        navigation.style.border="0px solid rgb(236, 15, 15)"
    }
})








 