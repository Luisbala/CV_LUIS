document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todas las barras de progreso
    const progressBars = document.querySelectorAll('.progress');

    // Itera sobre cada barra de progreso para aplicar su ancho
    progressBars.forEach(bar => {
        // Obtiene el ancho objetivo del atributo 'data-width'
        const targetWidth = bar.getAttribute('data-width');
        
        // Aplica el ancho al estilo del elemento.
        // La transición en CSS se encargará de la animación.
        bar.style.width = targetWidth;
    });
});
