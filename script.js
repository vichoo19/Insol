// ---------------------ANIMACION NAV BAR-----------------
document.addEventListener('DOMContentLoaded', function() {
    const cornerLogo = document.querySelector('.logo-corner');
    const headerHeight = document.querySelector('header').offsetHeight;
    const backgroundNav = document.querySelector('nav');
    const whatsapp = document.querySelector('.whatsapp');
    window.addEventListener('scroll', function() {
        // Calculamos cuánto se ha desplazado la página
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // Definimos un punto de activación (puedes ajustar este valor)
        const triggerPoint = 50;
        
        if (scrollPosition > triggerPoint) {
        
            // Hacemos visible el logo en la esquina
            cornerLogo.classList.add('logo-visible');

            backgroundNav.classList.add('background-nav');

            whatsapp.style.right = '30px';
        } 
        else {
            cornerLogo.classList.remove('logo-visible');

            backgroundNav.classList.remove('background-nav');

            whatsapp.style.right='-70px'
        }
    });
});

// -----------------PASAR PORTADA--------------------------
let currentIndex = 0;
let autoResumeTimeout;
const slides = document.querySelectorAll('.slide');
const texts = document.querySelectorAll('.slide-text');
const total = slides.length;

function stopAutomaticAnimation() {
    // Desactivar animaciones CSS
    slides.forEach(slide => slide.classList.add('manual-slide'));
    texts.forEach(text => text.classList.add('manual-text'));

    // Cancelar animaciones activas
    slides.forEach(slide => slide.style.animation = 'none');
    texts.forEach(text => text.style.animation = 'none');
}

function showManualSlide(index) {
    stopAutomaticAnimation();

    // Ocultar todos
    slides.forEach((slide, i) => slide.classList.remove('active'));
    texts.forEach((text, i) => text.classList.remove('active'));

    // Mostrar solo el actual
    slides[index].classList.add('active');
    texts[index].classList.add('active');

    resetAutoAnimation();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % total;
    showManualSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + total) % total;
    showManualSlide(currentIndex);
}

function resetAutoAnimation() {
    clearTimeout(autoResumeTimeout);
    autoResumeTimeout = setTimeout(() => {
        resumeAutomaticAnimation();
    }, 6000); // 6 segundos después de la última interacción
}

function resumeAutomaticAnimation() {
    // Eliminar clases manuales
    slides.forEach(slide => {
        slide.classList.remove('manual-slide', 'active');
        slide.style.animation = '';
    });

    texts.forEach(text => {
        text.classList.remove('manual-text', 'active');
        text.style.animation = '';
    });

    // Restaurar el index actual
    currentIndex = 0;
}
// Variables para detección de gesto
let touchStartX = 0;
let touchEndX = 0;

// Elemento donde se detecta el swipe
const slider = document.getElementById("slider");

// Escuchar inicio del gesto
slider.addEventListener('touchstart', e => {
    touchStartX = e.changedTouches[0].screenX;
}, false);

// Escuchar fin del gesto
slider.addEventListener('touchend', e => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipeGesture();
}, false);

// Lógica del swipe
function handleSwipeGesture() {
    const swipeDistance = touchEndX - touchStartX;

    if (Math.abs(swipeDistance) < 50) return; // Ignorar swipes muy pequeños

    if (swipeDistance < 0) {
        // Deslizó hacia la izquierda → ir a la siguiente imagen
        nextSlide();
    } else {
        // Deslizó hacia la derecha → ir a la anterior
        prevSlide();
    }
}
// ---------------------QUITAR CHEK MARA MENU-----------------
document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll(".nav-link");
        const check = document.getElementById("check");

        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                check.checked = false; // Cierra el menú al hacer clic en cualquier link
            });
        });
    });
// ---------------------ANIMACION LOGO-----------------
window.addEventListener('DOMContentLoaded',() => {
    const logoResto = document.querySelector('.nsol');
    const logoI = document.querySelector('.i');
    setTimeout(()=>{
        logoI.style.transform='translateX(0)'; },600);
    setTimeout(()=> {
        logoResto.style.opacity='1';
        logoResto.style.transform='translateX(0)';},900);
});

// ---------------------ANIMACION SECCION SOMOS-----------------
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.3 // activa la animación cuando el 20% del elemento está visible
  });

  document.querySelectorAll('.somos-contenido').forEach(item => {
    observer.observe(item);
  });

// ---------------------ANIMACION MOSTRAR SERVICIOS-----------------
function mostrarServicio(num) {
    for (let i = 1; i <= 5; i++) {
        document.getElementById('servicio' + i).style.display = (i === num) ? 'block' : 'none';
        document.getElementById('fotos' + i).style.display = (i === num) ? 'block' : 'none';
    }
}
// ---------------------BOTONES SERVICIOS-----------------
for (let i = 1; i <= 5; i++) {
    const botonToggle = document.getElementById('boton-toggle' + i);
    botonToggle.addEventListener('click', () => {
        for (let j = 1; j <= 5; j++) {
            const otroBoton = document.getElementById('boton-toggle' + j);
            if (j !== i) {
                otroBoton.classList.remove('active');
            }
        }
        botonToggle.classList.toggle('active');
    });
}
window.onload = function() {
    mostrarServicio(1);
};
// ---------------------LIHGTBOX-----------------
const galeriaImagenes = {
    soldadura: [
    "imagenes/soldando.png",
    "imagenes/gasfiteria-servicio.jpg",
    "imagenes/climatizacion-servicio.jpg",
    "imagenes/sala_de_calderas-servicio.jpg",
    "imagenes/soldando2.jpg"
    ],

    gasfiteria: 
    ["imagenes/gasfiteria1.jpg",
    "imagenes/gasfiteria2.jpg",]
};

let galeriaActual = null;
let indiceActual = 0;
let startX = 0;
let isDragging = false;

function abrirLightbox(nombreGaleria, index) {
  galeriaActual = nombreGaleria;
  indiceActual = index;
  document.getElementById('lightbox').style.display = 'flex';
  actualizarImagen();
}

function cerrarLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function cambiarImagen(direccion) {
  const galeria = galeriaImagenes[galeriaActual];
  indiceActual = (indiceActual + direccion + galeria.length) % galeria.length;
  actualizarImagen();
}

function actualizarImagen() {
  const galeria = galeriaImagenes[galeriaActual];
  const img = document.getElementById('imagenAmpliada');
  img.src = galeria[indiceActual];
}

