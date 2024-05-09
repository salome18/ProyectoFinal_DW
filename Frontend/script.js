// Event listener para el botón de iniciar sesión
document.getElementById("btn-iniciar").addEventListener("click", function(event) {
    event.preventDefault(); // Evitar envío del formulario

    // Obtener el nombre de usuario y la contraseña ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Llamar a la función de autenticación con los datos ingresados por el usuario
    authenticateUser(username, password);
});

// Función para autenticar al usuario
function authenticateUser(username, password) {
    // Datos de usuario estáticos (para ejemplo)
    const users = [
        { username: "usuario1", password: "cont1" },
        { username: "usuario2", password: "contraseña2" }
    ];

    // Buscar al usuario en la lista de usuarios
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        // Si el usuario es encontrado, la autenticación es exitosa
        // Redirigir a la página de reservas
        window.location.href = "/reservas.html";
    } else {
        // Si el usuario no es encontrado, mostrar un mensaje de error
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
    }
}
