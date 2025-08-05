// ---------------------ANIMACION NAV BAR-----------------
document.addEventListener('DOMContentLoaded', function() {
    const cornerLogo = document.querySelector('.logo-corner');
    const headerHeight = document.querySelector('header').offsetHeight;
    const backgroundNav = document.querySelector('nav');

    window.addEventListener('scroll', function() {
        // Calculamos cuánto se ha desplazado la página
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // Definimos un punto de activación (puedes ajustar este valor)
        const triggerPoint = 50;
        
        if (scrollPosition > triggerPoint) {
        
            // Hacemos visible el logo en la esquina
            cornerLogo.classList.add('logo-visible');

            backgroundNav.classList.add('background-nav');
        } 
        else {
            cornerLogo.classList.remove('logo-visible');

            backgroundNav.classList.remove('background-nav');
        }
    });
});
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
    for (let i = 1; i <= 4; i++) {
        document.getElementById('servicio' + i).style.display = (i === num) ? 'block' : 'none';
        document.getElementById('fotos' + i).style.display = (i === num) ? 'block' : 'none';
    }
}
// ---------------------BOTONES SERVICIOS-----------------
for (let i = 1; i <= 4; i++) {
    const botonToggle = document.getElementById('boton-toggle' + i);
    botonToggle.addEventListener('click', () => {
        for (let j = 1; j <= 4; j++) {
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

