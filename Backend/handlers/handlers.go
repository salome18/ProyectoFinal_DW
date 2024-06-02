package handlers

import (
	"encoding/json"
	"net/http"
	"proyecto-final/models"
	"proyecto-final/repository"
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