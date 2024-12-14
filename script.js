// Función para cambiar la imagen y la cita  
function changeQuote() {  
    const imageUrl = "https://picsum.photos/500/300?random"; // Imagen aleatoria  
     const quoteApiUrl = "https://api.allorigins.win/get?url=" + encodeURIComponent("https://zenquotes.io/api/random?lang=es"); // Proxy alternativo para la API de ZenQuotes  

    // Cambiar la imagen  
    const imageElement = document.getElementById('motivational-image');  
    imageElement.src = imageUrl;  

    // Obtener la cita de la API  
    fetch(quoteApiUrl)  
        .then(response => response.json())  
        .then(data => {  
            if (data && data.contents) {  
                const jsonData = JSON.parse(data.contents); // Contenido real de la cita  
                const quoteElement = document.getElementById('motivational-quote');  
                quoteElement.textContent = `"${jsonData[0].q}" — ${jsonData[0].a}`; // Extraer cita en español y el autor  
            } else {  
                console.error("Error en los datos de la API:", data);  
                setDefaultQuote(); // Cita por defecto en caso de error  
            }  
        })  
        .catch(error => {  
            console.error("Error al obtener la cita:", error);  
            setDefaultQuote(); // Cita por defecto en caso de error  
        });  
}  

// Establecer una cita por defecto si no se puede obtener una nueva  
function setDefaultQuote() {  
    const quoteElement = document.getElementById('motivational-quote');  
    quoteElement.textContent = `"La única forma de hacer un gran trabajo es amar lo que haces." — Steve Jobs`; // Cita predeterminada en caso de error  
}  

// Llamada inicial para cargar una imagen y frase al cargar la página  
window.addEventListener('load', () => {  
    changeQuote(); // Cargar imagen y frase al cargar la página  
});  

// Asegurarnos de que el botón se conecta correctamente con la función  
document.addEventListener('DOMContentLoaded', () => {  
    const changeButton = document.getElementById('change-quote-btn');  
    if (changeButton) {  
        changeButton.addEventListener('click', changeQuote); // Agregar evento al botón para cambiar la imagen y la cita  
    }  
});