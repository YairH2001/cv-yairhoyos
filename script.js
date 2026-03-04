function mostrarSeccion(id) {

    const secciones = document.querySelectorAll('.seccion');

    // Oculta todas
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // Muestra la seleccionada
    document.getElementById(id).classList.add('activa');
}
function mostrarSeccion(id) {

    const secciones = document.querySelectorAll('.seccion');
    const botones = document.querySelectorAll('.menu button');

    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    botones.forEach(boton => {
        boton.classList.remove('activo');
    });

    document.getElementById(id).classList.add('activa');

    event.target.classList.add('activo');
}