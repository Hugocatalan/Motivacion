const quotes = [
    { text: "La única forma de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { text: "El futuro pertenece a aquellos que creen en la belleza de sus sueños.", author: "Eleanor Roosevelt" },
    { text: "La motivación es lo que te hace comenzar, el hábito es lo que te hace continuar.", author: "Jim Ryun" },
    { text: "No dejes que el ruido de las opiniones ajenas apague tu voz interior.", author: "Steve Jobs" },
    { text: "La vida es 10% lo que me ocurre y 90% cómo reacciono ante ello.", author: "Charles R. Swindoll" },
    { text: "El éxito es la suma de pequeños esfuerzos repetidos día tras día.", author: "Robert Collier" },
    { text: "Tu vida no mejora por casualidad, mejora por cambio.", author: "Jim Rohn" },
    { text: "El único modo de hacer un gran trabajo es amar lo que haces.", author: "Steve Jobs" },
    { text: "El único límite a nuestros logros de mañana son nuestras dudas y vacilaciones de hoy.", author: "Franklin D. Roosevelt" },
    { text: "No esperes. El tiempo nunca será justo.", author: "Napoleon Hill" },
    { text: "Los que son locos lo suficiente como para pensar que pueden cambiar el mundo, son los que lo hacen.", author: "Rob Siltanen" },
    { text: "Hazlo o no lo hagas, pero no lo intentes.", author: "Yoda" },
    { text: "La forma de empezar es dejar de hablar y comenzar a hacer.", author: "Walt Disney" },
    { text: "No importa cuántas veces fracases. Solo importa la última vez que triunfas.", author: "Chris Bradford" },
    { text: "Lo único imposible es aquello que no intentas.", author: "Anónimo" },
    { text: "Si puedes soñarlo, puedes lograrlo.", author: "Walt Disney" },
    { text: "Cualquier cosa que la mente humana pueda concebir y creer, puede lograrla.", author: "Napoleon Hill" },
    { text: "Nunca es demasiado tarde para ser lo que podrías haber sido.", author: "George Eliot" },
    { text: "La vida es un 10% lo que te sucede y un 90% cómo reaccionas ante ello.", author: "Charles R. Swindoll" },
    { text: "No cuentes los días, haz que los días cuenten.", author: "Muhammad Ali" },
    { text: "Lo que no te mata te hace más fuerte.", author: "Friedrich Nietzsche" },
    { text: "La mejor forma de predecir el futuro es crearlo.", author: "Abraham Lincoln" },
    { text: "La acción es la clave fundamental para todo éxito.", author: "Pablo Picasso" },
    { text: "La gente que es lo suficientemente loca como para pensar que puede cambiar el mundo, lo hace.", author: "Rob Siltanen" },
    { text: "Tu vida es tu mensaje para el mundo. Hazla inspiradora.", author: "Lori Deschene" },
    { text: "Las dificultades preparan a menudo a una persona común para un destino extraordinario.", author: "C.S. Lewis" },
    { text: "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.", author: "Vidal Sassoon" },
    { text: "El secreto del cambio es enfocar toda tu energía no en luchar contra lo viejo, sino en construir lo nuevo.", author: "Sócrates" },
    { text: "No se trata de ser el mejor, se trata de ser mejor que ayer.", author: "Anónimo" },
    { text: "Si quieres cambiar el mundo, cámbiate a ti mismo.", author: "Mahatma Gandhi" },
    { text: "Las oportunidades no suceden, las creas.", author: "Chris Grosser" },
    { text: "Cada vez que te caigas, levántate con más fuerza.", author: "Anónimo" },
    { text: "La perseverancia es la clave para transformar lo imposible en posible.", author: "Anónimo" },
    { text: "Tu única limitación es la que te pongas a ti mismo.", author: "Anónimo" },
    { text: "No te detengas cuando estés cansado, detente cuando hayas terminado.", author: "Anónimo" },
    { text: "La diferencia entre lo ordinario y lo extraordinario es ese pequeño extra.", author: "Jimmy Johnson" },
    { text: "Un sueño no se hace realidad a través de la magia; se necesita sudor, determinación y trabajo duro.", author: "Colin Powell" },
    { text: "Nunca dejes que tus miedos tomen las riendas de tu vida.", author: "Anónimo" },
    { text: "Haz hoy lo que otros no quieren hacer, haz mañana lo que otros no pueden hacer.", author: "Jerry Rice" },
    { text: "La disciplina es el puente entre las metas y los logros.", author: "Jim Rohn" }
];

// Pre-cargar imágenes aleatorias
const imageUrls = [
    "https://picsum.photos/500/300?random=1",
    "https://picsum.photos/500/300?random=2",
    "https://picsum.photos/500/300?random=3",
    "https://picsum.photos/500/300?random=4",
    "https://picsum.photos/500/300?random=5",
    "https://picsum.photos/500/300?random=6",
    "https://picsum.photos/500/300?random=7",
    "https://picsum.photos/500/300?random=8",
    "https://picsum.photos/500/300?random=9"
];

// Función para cambiar la cita y la imagen
function changeQuote() {
    // Seleccionar una cita aleatoria del array
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

    // Seleccionar una imagen aleatoria del array
    const randomImage = imageUrls[Math.floor(Math.random() * imageUrls.length)];

    // Cambiar la imagen
    const imageElement = document.getElementById('motivational-image');
    imageElement.src = randomImage;

    // Actualizar la cita en el DOM
    const quoteElement = document.getElementById('motivational-quote');
    quoteElement.textContent = `"${randomQuote.text}" — ${randomQuote.author}`; // Cita aleatoria
}

// Llamada inicial para cargar una imagen y una cita al cargar la página
window.addEventListener('load', () => {
    // Cargar una imagen y cita inicial al cargar la página
    changeQuote();
});

// Asegurarnos de que el botón se conecta correctamente con la función
document.addEventListener('DOMContentLoaded', () => {
    const changeButton = document.getElementById('change-quote-btn');
    if (changeButton) {
        changeButton.addEventListener('click', changeQuote); // Agregar evento al botón para cambiar la imagen y la cita
    }
});
