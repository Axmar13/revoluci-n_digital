function verifyAge(isAdult) {
    if (isAdult) {
        document.getElementById("age-verification").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Debes ser mayor de edad para acceder a esta página.");
    }
}

function myFunction() {
    return "Está por salir de la página.";
}