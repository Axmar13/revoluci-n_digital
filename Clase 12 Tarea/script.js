document.addEventListener("DOMContentLoaded", function() {
    saludo();
});

function saludo() {
    let nombre = prompt("Por favor, ingresa tu nombre");
  
    if (nombre === null || nombre === "" || nombre === " ") {
      alert("Por favor, ingresa tu nombre.");
      location.reload();
    } else {
      alert("¡Bienvenido, " + nombre + "!");
    }
}