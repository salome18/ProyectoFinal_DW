CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    correo VARCHAR(100) UNIQUE NOT NULL,
    contraseña VARCHAR(100) NOT NULL
);

CREATE TABLE autos (
    id SERIAL PRIMARY KEY,
    tipo VARCHAR(50),
    color VARCHAR(50),
    modelo VARCHAR(50),
    marca VARCHAR(50),
    precio DECIMAL(10, 2),
    disponible BOOLEAN DEFAULT TRUE
);

CREATE TABLE reservas (
    id SERIAL PRIMARY KEY,
    usuario_id INT REFERENCES usuarios(id),
    automovil_id INT REFERENCES autos(id),
    precio_total DECIMAL(10, 2)
);
