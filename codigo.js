window.addEventListener("DOMContentLoaded", (event)=>{
    const menuBtn = document.getElementById("menu");
    const ul= document.querySelector("header nev");

    menuBtn.addEventListener("click", (event)=>{
        menuBtn.classList.toggle("salir");
        ul.classList.toggle("visible");
    })
})
