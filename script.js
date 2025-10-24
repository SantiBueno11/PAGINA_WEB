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

// === INTRO ANIMADA (pantalla de carga con el logo LW) ===
window.addEventListener("load", () => {
  const intro = document.getElementById("intro");

  // Espera 2.5 segundos y oculta el logo con un efecto suave
  setTimeout(() => {
    intro.style.opacity = "0";
    setTimeout(() => {
      intro.style.display = "none";
    }, 800);
  }, 2500);
});
function cambiarIdioma() {
  const idioma = document.getElementById("language").value;

  const textos = {
    es: {
      titulo: "Lanzamiento Web",
      subtitulo: "Páginas web profesionales para emprendedores y pequeños negocios",
      sobreMi: "Sobre mí",
      descripcion: "¡Hola! Soy Santiago Bueno, tengo 23 años y actualmente estoy estudiando la carrera de Tecnicatura Universitaria en Desarrollo de Software. Me apasiona crear páginas web modernas, funcionales y adaptadas a las necesidades de cada cliente. Busco ayudar a emprendedores y negocios a construir su presencia digital de una manera profesional y atractiva.",
      paquetes: "Mis Paquetes"
    },
    en: {
      titulo: "Web Launch",
      subtitulo: "Professional websites for entrepreneurs and small businesses",
      sobreMi: "About Me",
      descripcion: "Hi! I'm Santiago Bueno, 23 years old, currently studying a degree in Software Development. I love creating modern and functional websites tailored to each client's needs. I help entrepreneurs and businesses build their online presence in a professional and attractive way.",
      paquetes: "My Packages"
    }
  };

  const t = textos[idioma];

  document.querySelector("h1").textContent = t.titulo;
  document.querySelector("header p").textContent = t.subtitulo;
  document.querySelector(".about h2").textContent = t.sobreMi;
  document.querySelector(".about p").textContent = t.descripcion;
  document.querySelector(".services h2").textContent = t.paquetes;
}


