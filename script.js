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

window.addEventListener('DOMContentLoaded',() => {
    const logoResto = document.querySelector('.nsol');
    const logoI = document.querySelector('.i');
    setTimeout(()=>{
        logoI.style.transform='translateX(0)'; },600);
    setTimeout(()=> {
        logoResto.style.opacity='1';
        logoResto.style.transform='translateX(0)';},900);
})





function mostrarServicio(num) {
    for (let i = 1; i <= 4; i++) {
        document.getElementById('servicio' + i).style.display = (i === num) ? 'block' : 'none';
    }
}

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
