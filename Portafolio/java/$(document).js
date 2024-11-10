// jQuery para alternar entre modos
$(document).ready(function() {
    $('#modo-toggle').on('click', function() {
        $('body').toggleClass('modo-claro'); // Cambia el modo
        // Cambia el texto del botón según el modo actual
        if ($('body').hasClass('modo-claro')) {
            $('#modo-toggle').text('Modo Oscuro');
        } else {
            $('#modo-toggle').text('Modo Claro');
        }
    });
});