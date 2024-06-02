package repository

import (
	"github.com/jmoiron/sqlx"
	"github.com/salome18/ProyectoFinal_DW/tree/5eb08e9364ed9aa9c15169f9e03f1cf6279529ac/Backend/models"
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
