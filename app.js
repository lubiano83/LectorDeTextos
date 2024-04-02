/* App */

const form = document.getElementById("Formulario");
const TEXTO = document.getElementById("exampleFormControlTextarea1");

function generarAudioIngles() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;
    const utterThis = new SpeechSynthesisUtterance(TEXTO);
    utterThis.lang = "en";
    window.speechSynthesis.speak(utterThis);
}

function generarAudioEspañol() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;
    const utterThis = new SpeechSynthesisUtterance(TEXTO);
    utterThis.lang = "es";
    window.speechSynthesis.speak(utterThis);
}

function generarAudioFrances() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;
    const utterThis = new SpeechSynthesisUtterance(TEXTO);
    utterThis.lang = "fr";
    window.speechSynthesis.speak(utterThis);
}

function generarAudioAleman() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;
    const utterThis = new SpeechSynthesisUtterance(TEXTO);
    utterThis.lang = "de";
    window.speechSynthesis.speak(utterThis);
}

function generarAudioItaliano() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;
    const utterThis = new SpeechSynthesisUtterance(TEXTO);
    utterThis.lang = "it";
    window.speechSynthesis.speak(utterThis);
}



