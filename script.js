const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})

function modhtml(){
    document.querySelector(".titgen").innerHTML = "Hace click en el boton de la categoria que te interesa"
}
document.querySelector(".titgen").addEventListener("click",()=>{
    modhtml();
})

