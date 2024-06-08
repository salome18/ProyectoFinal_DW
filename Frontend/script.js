document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
    const btnSignIn = document.getElementById("btn-sign-in");
    const btnSignUp = document.getElementById("btn-sign-up");


    btnSignIn.addEventListener("click",()=>{
    container.classList.remove("toggle");
    });
    btnSignUp.addEventListener("click",()=>{
    container.classList.add("toggle");
    });

    // Función para el registro de usuarios
    const registerUser = async (data) => {
        try {
            const response = await fetch('http://localhost:8080/usuarios', {
                method: 'POST',mode:"no-cors",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            console.log("Respuesta del servidor:", response); // Verificar respuesta del servidor

            if (response.status != 0) {
                throw new Error('Error al registrar usuario');
            }
            alert('Usuario registrado correctamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Ocurrió un error al registrar usuario');
        }
    };

    // Event listener para el botón de registro
    document.getElementById("btn-registro").addEventListener("click", function(event) {
        event.preventDefault(); // Evitar envío del formulario

        // Obtener los datos de registro ingresados por el usuario
        const peticion = {
            ID: 0,
            Nombre: document.getElementById("user_name")?.value,
            Correo: document.getElementById("user_email")?.value,
            Password: document.getElementById("user_password")?.value

        } 

        console.log(peticion)
        // Llamar a la función para registrar al usuario
        registerUser(peticion);
    });
});


//Funcion para iniciar sesion
document.getElementById("btn-iniciar").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar envío del formulario

    // Obtener el nombre de usuario y la contraseña ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Llamar a la función de autenticación con los datos ingresados por el usuario
    authenticateUser(username, password);
});


btnSignIn.addEventListener("click",()=>{
container.classList.remove("toggle");
});
btnSignUp.addEventListener("click",()=>{
container.classList.add("toggle");
});

// Función para autenticar al usuario
function authenticateUser(username, password) {
    // Datos de usuario estáticos (para ejemplo)
    const users = [
        { username: "salomegarces", password: "cont1" },
        { username: "usuario2", password: "contraseña2" },
        {username:'cristian@gmail.com', password:'123456'}
    ];

    // Buscar al usuario en la lista de usuarios
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Si el usuario es encontrado, la autenticación es exitosa
        // Redirigir a la página de reservas
        window.location.href = "buscar.html";
    } else {
        // Si el usuario no es encontrado, mostrar un mensaje de error
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}