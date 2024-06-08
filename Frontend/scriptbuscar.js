document.addEventListener('DOMContentLoaded', function() {
    // Event listener para mostrar/ocultar filtros
    document.getElementById('filtroBtn').addEventListener('click', function(event) {
        event.preventDefault(); 
        var opcionesFiltro = document.getElementById('opcionesFiltro');
        opcionesFiltro.classList.toggle('mostrar');
    });

    // Event listener para aplicar los filtros
    document.getElementById('filtroForm').addEventListener('submit', function(event) {
        event.preventDefault(); 
    
        // Obtener las opciones seleccionadas
        const marca = document.getElementById('brand').value;
        const combustible = document.getElementById('fuel').value;
        const transmision = document.getElementById('transmission').value;
        const tipo = document.getElementById('type').value;

        // Llamar a la función de búsqueda con los parámetros de filtro
        buscarAutos(marca, combustible, transmision, tipo);

        // Ocultar el contenedor de filtros después de aplicar los filtros
        var opcionesFiltro = document.getElementById('opcionesFiltro');
        opcionesFiltro.classList.remove('mostrar');
    });

    // Event listener para el formulario de búsqueda
    document.getElementById('search-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe

        // Obtener los valores de los campos del formulario
        const ciudad = document.getElementById('city').value;
        const fecha = document.getElementById('fecha').value;
        const hora = document.getElementById('time').value;

        // Verificar si los campos no están vacíos
        if (ciudad !== '' && fecha !== '' && hora !== '') {
            // Llamar a la función de búsqueda sin filtros
            buscarAutos();
        }
    });

    // Función para buscar autos con o sin filtros
    function buscarAutos(marca = '', combustible = '', transmision = '', tipo = '') {
        // Construir la URL con parámetros de filtro
        let url = 'http://localhost:8080/cars';
        const params = new URLSearchParams();

        if (marca) params.append('marca', marca);
        if (combustible) params.append('combustible', combustible);
        if (transmision) params.append('transmision', transmision);
        if (tipo) params.append('carroceria', tipo);

        if (params.toString()) url += `?${params.toString()}`;

        // Realizar una solicitud HTTP GET al endpoint para obtener la información de los autos
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                
                // Obtener el contenedor de los autos
                const carsContainer = document.querySelector('.Cards-cars');

                // Limpiar el contenido anterior de la tabla
                carsContainer.innerHTML = '';

                // Iterar sobre los datos de los autos y agregarlos al contenedor
                data.forEach(car => {
                    console.log(car);
                    // Crear un nuevo div con la clase 'box'
                    const carElement = document.createElement('div');
                    carElement.classList.add('box');

                    // Crear un div para la imagen del auto
                    const carImageDiv = document.createElement('div');
                    carImageDiv.classList.add('box-img');
                    // Crear la imagen del auto
                    const carImage = document.createElement('img');
                    carImage.src = car.imagen; // Utilizamos el enlace de la imagen proporcionado por el servidor
                    carImageDiv.appendChild(carImage);

                    // Crear un párrafo para el modelo del auto
                    const carModel = document.createElement('p');
                    carModel.textContent = car.modelo;

                    // Crear un h2 para el nombre del auto
                    const carName = document.createElement('h2');
                    carName.textContent = car.nombre;

                    // Crear un h3 para el precio del auto
                    const carPrice = document.createElement('h3');
                    carPrice.innerHTML = `${car.precio_por_dia} <span>/día</span>`;

                    // Crear un botón para ver detalles del auto
                    const detailsButton = document.createElement('button');
                    detailsButton.classList.add('btn_detalles');
                    detailsButton.textContent = 'Ver detalles';
                    detailsButton.addEventListener('click', function() {
                        emergente();
                        actualizarDetalles(car);
                    });

                    // Agregar los elementos al div de cada auto
                    carElement.appendChild(carImageDiv);
                    carElement.appendChild(carModel);
                    carElement.appendChild(carName);
                    carElement.appendChild(carPrice);
                    carElement.appendChild(detailsButton);

                    // Agregar el div del auto al contenedor de autos
                    carsContainer.appendChild(carElement);
                });

                // Mostrar los resultados de la búsqueda
                const searchResults = document.querySelectorAll('.search-results');
                searchResults.forEach(element => {
                    element.style.display = 'grid';
                });
            })
            .catch(error => {
                console.error('Error al obtener la información de los autos:', error);
                const carsContainer = document.querySelector('.search-results');
                carsContainer.innerHTML = "<p>Lo sentimos, ninguno de nuestros autos cumple con los filtros ingresados. Por favor intenta de nuevo.</p>";
            });
    }

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

    const recipeCloseBtn = document.getElementById('close-btn');

    recipeCloseBtn.addEventListener('click', () => {
        document.getElementById("informacion_buscar").style.display="none";
    });

    function emergente() {
        console.log("Hice click");
        document.getElementById('informacion_buscar').style.display = "block";
    }


    function actualizarDetalles(data) {
        // Actualizar los elementos HTML con los datos del auto
        document.querySelector('.Car-name').textContent = data.nombre;
        document.querySelector('.marca').textContent = data.marca;
        document.querySelector('.modelo').textContent = data.modelo;
        document.querySelector('.combustible').textContent = data.combustible;
        document.querySelector('.transmision').textContent = data.transmision;
        document.querySelector('.carroceria').textContent = data.carroceria;
        document.querySelector('.car-img img').src = data.imagen;
        document.querySelector('.precio').textContent=data.precio_por_dia;
    }
});
