/* App */

const form = document.getElementById("Formulario");
const TEXTO = document.getElementById("exampleFormControlTextarea1");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = TEXTO.value;
    const utterThis = new SpeechSynthesisUtterance(text);
    utterThis.lang = "es";
    window.speechSynthesis.speak(utterThis);
});
