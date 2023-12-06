document.querySelector(".menuBarra").addEventListener("click", animacionMenu); //TRAEMOS EL ELEMTO DE menuBarra y añade un evento que ejecuta una función al momento de hacer click

let barra1 = document.querySelector(".fila1"); //EN UNA VARIABLE GUARDAMOS EL ELEMENTO QUE TRAEMOS
let barra2 = document.querySelector(".fila2"); //EN UNA VARIABLE GUARDAMOS EL ELEMENTO QUE TRAEMOS
let barra3 = document.querySelector(".fila3"); //EN UNA VARIABLE GUARDAMOS EL ELEMENTO QUE TRAEMOS

function animacionMenu(){
    barra1.classList.toggle("fila1Animacion"); //USAMOS FUNCION DE TOGGLE PARA ACTIVAR LA ANIMACION
    barra3.classList.toggle("fila3Animacion"); //USAMOS FUNCION DE TOGGLE PARA ACTIVAR LA ANIMACION
    barra2.classList.toggle("fila2Animacion"); //USAMOS FUNCION DE TOGGLE PARA ACTIVAR LA ANIMACION
}