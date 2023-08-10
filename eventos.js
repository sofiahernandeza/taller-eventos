const container= document.querySelector("#myDiv");

function saludoDiv() {
    alert('Hola! Soy el div');
}
container.addEventListener("click", saludoDiv);