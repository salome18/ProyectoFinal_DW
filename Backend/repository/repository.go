package repository

import (
	"github.com/jmoiron/sqlx"
<<<<<<< HEAD
	"github.com/salome18/ProyectoFinal_DW/Backend/models"
=======
	"github.com/salome18/ProyectoFinal_DW/tree/5eb08e9364ed9aa9c15169f9e03f1cf6279529ac/Backend/models"
>>>>>>> f683c9db3360a34f9e20f5d15f04d1931c6422ac
)

type Repository struct {
	DB *sqlx.DB
}

func NewRepository(db *sqlx.DB) *Repository {
	return &Repository{DB: db}
}

func (r *Repository) GetUsuarios() ([]models.Usuario, error) {
	var usuarios []models.Usuario
	err := r.DB.Select(&usuarios, "SELECT * FROM usuarios")
	return usuarios, err
}

func (r *Repository) CreateUsuario(usuario models.Usuario) error {
	_, err := r.DB.NamedExec(`INSERT INTO usuarios (nombre, correo, contraseña) VALUES (:nombre, :correo, :contraseña)`, &usuario)
	return err
}

// Implementar métodos para Autos y Reservas
