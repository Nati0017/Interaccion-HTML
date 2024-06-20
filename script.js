
document.addEventListener("DOMContentLoaded", function() {
    var primerHolaMundo = document.querySelector("p");
    primerHolaMundo.textContent = "Adiós";
});


document.addEventListener("DOMContentLoaded", function() {
    var encabezado = document.querySelector("h1");
    encabezado.style.color = "orange";
});

document.addEventListener("DOMContentLoaded", function() {
    var nuevoEncabezado = document.createElement("h2");
    nuevoEncabezado.textContent = "Haz clic para cambiar el color a marrón";
    nuevoEncabezado.addEventListener("click", function() {
        this.style.color = "brown";
    });
    document.body.appendChild(nuevoEncabezado);
});
