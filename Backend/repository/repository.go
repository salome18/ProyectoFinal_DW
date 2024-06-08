package repository

import (
	"context"
	"database/sql"
	"fmt"

	"github.com/jmoiron/sqlx"
	"proyecto-final/models" 
)

var _ Repository[any] = &repository[any]{}

type Repository[Entity any] interface {
	// Inserts a new item in a single table
	Create(ctx context.Context, query string, queryParams map[string]any) (int64, error)
	// Fetches an item from a single table
	Read(ctx context.Context, query, resourceID string) (*Entity, error)
	// Fetches all items from a single table using limit and offset as parameters for results pagination
	List(ctx context.Context, query string) ([]*Entity, bool, error)
	// Removes an item from table
	Delete(ctx context.Context, query, resourceID string) error
	// Overwrites the information in a single table row
	Update(ctx context.Context, query string, queryParams map[string]any) error
}

type repository[Entity any] struct {
	connection *sqlx.DB
}

func NewRepository[Entity any](conn *sqlx.DB) (*repository[Entity], error) {
	if conn == nil {
		return nil, fmt.Errorf("a sqlx.DB instance is strictly needed to create a persistence")
	}
	return &repository[Entity]{
		connection: conn,
	}, nil
}

func (p *repository[Entity]) Create(ctx context.Context, query string, params map[string]any) (int64, error) {
	lastInsertId := int64(0)
	rows, err := p.connection.NamedQueryContext(ctx, query, params)
	if err != nil {
		return lastInsertId, fmt.Errorf("insert failed, err: %w", err)
	}
	for rows.Next() {
		if err := rows.Scan(&lastInsertId); err != nil {
			return lastInsertId, fmt.Errorf("insert failed, err: %w", err)
		}
	}
	return lastInsertId, nil
}

func (p *repository[Entity]) Read(ctx context.Context, query, ID string) (*Entity, error) {
	dest := new(Entity)
	err := p.connection.QueryRowx(query, ID).StructScan(dest)
	if err != nil {
		if err == sql.ErrNoRows {
			return nil, fmt.Errorf("record with ID %s not found in database", ID)
		}
		return nil, fmt.Errorf("[QueryRowxContext]: %w", err)
	}
	return dest, nil
}

func (p *repository[Entity]) List(ctx context.Context, query string) ([]*Entity, bool, error) {
	var dest []*Entity
	err := p.connection.SelectContext(ctx, &dest, query)
	if err != nil {
		return nil, false, fmt.Errorf("[SelectContext]: %w", err)
	}

	hasNextPage := len(dest) > 0
	bound := min(len(dest), len(dest))
	list := dest[:int(bound)]

	return list, hasNextPage, nil
}

func (p *repository[Entity]) Delete(ctx context.Context, query, ID string) error {
	_, err := p.connection.ExecContext(ctx, query, ID)
	if err != nil {
		return fmt.Errorf("[ExecContext]: %w", err)
	}
	return nil
}

func (p *repository[Entity]) Update(ctx context.Context, query string, params map[string]any) error {
	_, err := p.connection.NamedExecContext(ctx, query, params)
	if err != nil {
		return fmt.Errorf("[NamedExecContext]: %w", err)
	}
	return nil
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}


type CarRepository struct {
    db *sqlx.DB
}

func NewCarRepository(db *sqlx.DB) *CarRepository {
    return &CarRepository{db: db}
}

func (r *CarRepository) GetCars(marca, combustible, transmision, carroceria string) ([]models.Car, error) {
    query := "SELECT nombre, marca, combustible, transmision, carroceria, modelo, precio_por_dia, imagen FROM cars WHERE 1=1"
    args := []interface{}{}
    argPos := 1

    if marca != "" {
        query += fmt.Sprintf(" AND marca = $%d", argPos)
        args = append(args, marca)
        argPos++
    }
    if combustible != "" {
        query += fmt.Sprintf(" AND combustible = $%d", argPos)
        args = append(args, combustible)
        argPos++
    }
    if transmision != "" {
        query += fmt.Sprintf(" AND transmision = $%d", argPos)
        args = append(args, transmision)
        argPos++
    }
    if carroceria != "" {
        query += fmt.Sprintf(" AND carroceria = $%d", argPos)
        args = append(args, carroceria)
        argPos++
    }

    var cars []models.Car
    err := r.db.Select(&cars, query, args...)
    if err != nil {
        return nil, err
    }

    return cars, nil
}