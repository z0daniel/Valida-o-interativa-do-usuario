let contador = 0;


const elementoNumero = document.getElementById("numero");
const btnIncrementar = document.getElementById("btnIncrementar");
const btnDecrementar = document.getElementById("btnDecrementar");
const btnZerar = document.getElementById("btnZerar");


function atualizarDisplay() {
    
    elementoNumero.textContent = contador;

    
    if (contador > 0) {
        elementoNumero.style.color = "green";
    } else if (contador < 0) {
        elementoNumero.style.color = "red";
    } else {
        elementoNumero.style.color = "black"; 
    }
}


btnIncrementar.addEventListener("click", function() {
    contador++; // Aumenta 1
    atualizarDisplay();
});

btnDecrementar.addEventListener("click", function() {
    contador--; // Diminui 1
    atualizarDisplay();
});

btnZerar.addEventListener("click", function() {
    contador = 0; // Volta pra zero
    atualizarDisplay();
});