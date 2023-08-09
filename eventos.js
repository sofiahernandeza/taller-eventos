let container= document.getElementById("myDiv");


function saludoDiv() {
    alert('Hola! Soy el div');
}
container.addEventListener("click", saludoDiv);

function saludoBoton(event) {
    alert('¡Hola!');
   
}