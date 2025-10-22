let planActual = ''; // Guarda temporalmente el plan seleccionado
const phoneNumber = '5492645875143'; // ⚠️ Reemplazá con tu número real en formato internacional

/**
 * Muestra la ventana modal al hacer clic en un botón de plan
 */
function confirmarContacto(planName) {
  planActual = planName;
  const modal = document.getElementById('modal-confirmacion');
  document.getElementById('plan-seleccionado').textContent = planName;
  modal.style.display = 'block';
  modal.classList.remove('hide'); // Por si se usó anteriormente
}

/**
 * Cierra la ventana modal con animación suave
 */
function cerrarModal() {
  const modal = document.getElementById('modal-confirmacion');
  modal.classList.add('hide'); // Activa la animación fadeOut
  setTimeout(() => {
    modal.style.display = 'none';
    modal.classList.remove('hide');
  }, 300);
}

function redirigirAWhatsapp() {
    cerrarModal(); // cierra la ventana de confirmación

    // muestra el formulario de contacto
    document.getElementById("formulario-contacto").style.display = "block";

    // carga el nombre del plan seleccionado
    document.getElementById("planSeleccionadoForm").value = planActual;

    // hace scroll automático hasta el formulario
    document.getElementById("formulario-contacto").scrollIntoView({ behavior: "smooth" });
}


/**
 * Cierra el modal al hacer clic fuera del contenido
 */
window.onclick = function (event) {
  const modal = document.getElementById('modal-confirmacion');
  if (event.target === modal) cerrarModal();
};

/* ================================================= */
/* === EFECTO DE APARICIÓN AL HACER SCROLL (AOS) === */
/* ================================================= */

const animatedElements = document.querySelectorAll('section, .card, .feature-item');

/**
 * Verifica si el elemento está visible en la pantalla
 */
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
    rect.bottom >= 0
  );
}

/**
 * Aplica el efecto de aparición cuando el elemento entra en vista
 */
function checkVisibility() {
  animatedElements.forEach((el) => {
    if (isElementInViewport(el)) el.classList.add('show-effect');
  });
}

/**
 * Oculta los elementos al cargar la página (excepto el header)
 */
document.addEventListener('DOMContentLoaded', () => {
  animatedElements.forEach((el) => {
    if (el.tagName.toLowerCase() !== 'header') el.classList.add('hidden');
  });
  checkVisibility();
});

window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);
