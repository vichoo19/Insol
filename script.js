document.addEventListener('DOMContentLoaded', function() {
    const cornerLogo = document.querySelector('.logo-corner');
    const headerHeight = document.querySelector('header').offsetHeight;
    const backgroundNav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        // Calculamos cuánto se ha desplazado la página
        const scrollPosition = window.scrollY || window.pageYOffset;
        
        // Definimos un punto de activación (puedes ajustar este valor)
        const triggerPoint = 100;
        
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