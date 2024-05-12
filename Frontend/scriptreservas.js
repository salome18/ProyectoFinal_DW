//Función para mostrar filtros
document.getElementById('filtroBtn').addEventListener('click', function(event) {
    event.preventDefault(); 
    var opcionesFiltro = document.getElementById('opcionesFiltro');
    opcionesFiltro.classList.toggle('mostrar');
});

document.getElementById('filtroForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Obtener las opciones seleccionadas
    const marca = document.getElementById('brand').value;
    const combustible = document.getElementById('fuel').value;
    const transmision = document.getElementById('transmission').value;
    const tipo = document.getElementById('type').value;

    // Ocultar el contenedor de filtros después de aplicar los filtros
    var opcionesFiltro = document.getElementById('opcionesFiltro');
    opcionesFiltro.classList.remove('mostrar');
});


//Desplegar Calendario
const fechaInput = document.getElementById("fecha");
const picker = new Pikaday({ field: fechaInput });

//Desplegar horarios
const horaInput = document.getElementById("time");
flatpickr(horaInput, {
    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: false,
    minuteIncrement: 60,
 });

document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Obtener los valores de los campos del formulario
    const ciudad = document.getElementById('city').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('time').value;

    // Verificar si los campos no están vacíos
   if (ciudad !== '' && fecha !== '' && hora !== '') {
        // Mostrar todos los elementos con la clase 'search-results'
        const searchResults = document.querySelectorAll('.search-results');
        searchResults.forEach(element => {
            element.style.display = 'block';
        });
    }

    /*const searchResults = document.querySelectorAll('.search-results');
        searchResults.forEach(element => {
            element.style.display = 'block';
        });*/
});


