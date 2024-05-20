let num_secreto = Math.floor(Math.random() * 100) + 1;
let intentos = 10;

function guessNumber() {
    let num_ingresado = document.getElementById('guessInput').value;
    let feedback = document.getElementById('feedback');
    let attempts = document.getElementById('attempts');

    if (num_ingresado == num_secreto) {
        feedback.textContent = `¡Exacto! adivinaste en ${11 - intentos} intentos :).`;
        feedback.style.color = "green";
    } else {
        intentos--;
        if (num_ingresado < num_secreto) {
            feedback.textContent = "Muy bajo :v";
        } else {
            feedback.textContent = "Muy alto :v";
        }
        feedback.style.color = "red";
        attempts.textContent = `Te quedan ${intentos} intentos.`;

        if (intentos == 0) {
            feedback.textContent = `El número era: ${num_secreto}.`;
            attempts.textContent = "Se han acabado los intentos.";
        }
    }
}
