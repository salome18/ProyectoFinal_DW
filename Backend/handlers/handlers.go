package handlers

import (
	"encoding/json"
	"net/http"
<<<<<<< HEAD
	"github.com/salome18/ProyectoFinal_DW/Backend/models"
	"github.com/salome18/ProyectoFinal_DW/Backend/repository"
=======
	"proyecto-final/models"
	"proyecto-final/repository"
>>>>>>> f683c9db3360a34f9e20f5d15f04d1931c6422ac
)

type Handler struct {
	Repo *repository.Repository
}

func NewHandler(repo *repository.Repository) *Handler {
	return &Handler{Repo: repo}
}

func (h *Handler) GetUsuarios(w http.ResponseWriter, r *http.Request) {
	usuarios, err := h.Repo.GetUsuarios()
	if err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	json.NewEncoder(w).Encode(usuarios)
}

func (h *Handler) CreateUsuario(w http.ResponseWriter, r *http.Request) {
	var usuario models.Usuario
	if err := json.NewDecoder(r.Body).Decode(&usuario); err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	if err := h.Repo.CreateUsuario(usuario); err != nil {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.WriteHeader(http.StatusCreated)
}

// Implementar manejadores para Autos y Reservas