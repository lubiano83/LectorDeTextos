/* App */

const form = document.getElementById("Formulario");
const TEXTO = document.getElementById("exampleFormControlTextarea1");

function generarAudioEspañol() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;
    const utterThis = new SpeechSynthesisUtterance(TEXTO);
    utterThis.lang = "es";
    window.speechSynthesis.speak(utterThis);
}

function generarAudioIngles() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;

    // Hacer la solicitud de traducción a la API de Google
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=en&dt=t&q=" + encodeURIComponent(TEXTO))
    .then(response => response.json())
    .then(data => {
        const textoTraducido = data[0][0][0]; // Obtener el texto traducido

        // Crear un elemento de audio para la síntesis de voz
        const utterThis = new SpeechSynthesisUtterance(textoTraducido);
        utterThis.lang = "en"; // Establecer el idioma del habla en inglés

        // Reproducir el texto traducido en voz alta en inglés
        window.speechSynthesis.speak(utterThis);
    })
    .catch(error => console.error('Error:', error));
}

function generarAudioFrances() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;

    // Hacer la solicitud de traducción a la API de Google
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=fr&dt=t&q=" + encodeURIComponent(TEXTO))
    .then(response => response.json())
    .then(data => {
        const textoTraducido = data[0][0][0]; // Obtener el texto traducido

        // Crear un elemento de audio para la síntesis de voz
        const utterThis = new SpeechSynthesisUtterance(textoTraducido);
        utterThis.lang = "fr"; // Establecer el idioma del habla en francés

        // Reproducir el texto traducido en voz alta en francés
        window.speechSynthesis.speak(utterThis);
    })
    .catch(error => console.error('Error:', error));
}

function generarAudioAleman() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;

    // Hacer la solicitud de traducción a la API de Google
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=de&dt=t&q=" + encodeURIComponent(TEXTO))
    .then(response => response.json())
    .then(data => {
        const textoTraducido = data[0][0][0]; // Obtener el texto traducido

        // Crear un elemento de audio para la síntesis de voz
        const utterThis = new SpeechSynthesisUtterance(textoTraducido);
        utterThis.lang = "de"; // Establecer el idioma del habla en alemán

        // Reproducir el texto traducido en voz alta en alemán
        window.speechSynthesis.speak(utterThis);
    })
    .catch(error => console.error('Error:', error));
}

function generarAudioPortugues() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;

    // Hacer la solicitud de traducción a la API de Google
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=pt&dt=t&q=" + encodeURIComponent(TEXTO))
    .then(response => response.json())
    .then(data => {
        const textoTraducido = data[0][0][0]; // Obtener el texto traducido

        // Crear un elemento de audio para la síntesis de voz
        const utterThis = new SpeechSynthesisUtterance(textoTraducido);
        utterThis.lang = "pt"; // Establecer el idioma del habla en portugués

        // Reproducir el texto traducido en voz alta en portugués
        window.speechSynthesis.speak(utterThis);
    })
    .catch(error => console.error('Error:', error));
}

function generarAudioItaliano() {
    const TEXTO = document.getElementById("exampleFormControlTextarea1").value;

    // Hacer la solicitud de traducción a la API de Google
    fetch("https://translate.googleapis.com/translate_a/single?client=gtx&sl=es&tl=it&dt=t&q=" + encodeURIComponent(TEXTO))
    .then(response => response.json())
    .then(data => {
        const textoTraducido = data[0][0][0]; // Obtener el texto traducido

        // Crear un elemento de audio para la síntesis de voz
        const utterThis = new SpeechSynthesisUtterance(textoTraducido);
        utterThis.lang = "it"; // Establecer el idioma del habla en italiano

        // Reproducir el texto traducido en voz alta en italiano
        window.speechSynthesis.speak(utterThis);
    })
    .catch(error => console.error('Error:', error));
}




