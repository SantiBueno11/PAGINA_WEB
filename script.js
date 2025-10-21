let planActual = ''; // Variable para guardar el plan seleccionado temporalmente
const phoneNumber = '549111234567'; // Reemplaza con tu número de WhatsApp real

/**
 * Muestra la ventana modal personalizada al hacer clic en un botón de plan.
 * @param {string} planName - El nombre del plan (ej: 'Plan Básico').
 */
function confirmarContacto(planName) {
    planActual = planName; // Guarda el plan en la variable global
    document.getElementById('plan-seleccionado').textContent = planName; // Actualiza el texto del modal
    document.getElementById('modal-confirmacion').style.display = 'block'; // Muestra el modal
}

/**
 * Oculta la ventana modal.
 */
function cerrarModal() {
    document.getElementById('modal-confirmacion').style.display = 'none';
}

/**
 * Redirige a WhatsApp con el mensaje predefinido del plan seleccionado.
 */
function redirigirAWhatsapp() {
    if (planActual) {
        // Mensaje predefinido que aparecerá en WhatsApp
        const message = encodeURIComponent(`Hola, estoy interesado en el ${planActual} y me gustaría recibir más información.`);
        
        const whatsappUrl = `https://wa.me/${2645875143}?text=${message}`;

        window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva pestaña
        cerrarModal(); // Cierra el modal después de redirigir
    }
}

// Opcional: Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    const modal = document.getElementById('modal-confirmacion');
    if (event.target == modal) {
        cerrarModal();
    }
}

/* ================================================= */
/* === LÓGICA DE ANIMACIÓN AL HACER SCROLL (AOS) === */
/* ================================================= */

// Selecciona todos los elementos a animar: todas las secciones y todas las tarjetas.
// El HTML debe tener clases 'feature-item', 'card' y usar la etiqueta 'section'.
const animatedElements = document.querySelectorAll('section, .card, .feature-item');

/**
 * Revisa si un elemento está dentro del área visible del viewport.
 * @param {HTMLElement} el - El elemento DOM a revisar.
 * @returns {boolean} - True si el elemento es visible.
 */
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    // Usa el 80% de la ventana como umbral de visibilidad (para que aparezca antes de llegar al fondo de la pantalla)
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
    );
}

/**
 * Aplica el efecto de aparición a los elementos visibles.
 */
function checkVisibility() {
    animatedElements.forEach(el => {
        if (isElementInViewport(el)) {
            // Si es visible, le añadimos la clase que activa la transición CSS
            el.classList.add('show-effect');
        } else {
            // No hacemos nada si sale de la vista para que no desaparezcan
        }
    });
}

// 1. Añadir la clase '.hidden' a todos los elementos al cargar la página.
// Esto los oculta inicialmente y los prepara para el efecto.
document.addEventListener('DOMContentLoaded', () => {
    // Excluimos el <header> para que se vea inmediatamente
    animatedElements.forEach(el => {
        if (el.tagName.toLowerCase() !== 'header') {
            el.classList.add('hidden');
        }
    });
    // Ejecutamos una vez al inicio para que se muestren los elementos que ya están visibles (como la primera sección).
    checkVisibility(); 
});

// 2. Ejecutar la revisión de visibilidad en los eventos de scroll y resize.
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
