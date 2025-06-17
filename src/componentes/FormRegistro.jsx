import React from "react";
import { Link, useLocation } from "react-router-dom";

export const FormRegistro = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <form>
      <div className="row">
        {/* Primera columna */}
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Nombre de la empresa o cliente
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Juan Pérez"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="identificación" className="form-label fw-semibold">
              RUC o identificación
            </label>
            <input
              type="text"
              className="form-control"
              id="identificación"
              placeholder="identificación"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@mail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label fw-semibold">
              Teléfono
            </label>
            <input
              type="text"
              maxLength={10}
              className="form-control"
              id="telefono"
              placeholder="3001234567"
            />
          </div>
        </div>

        {/* Segunda columna */}
        <div className="col-md-6">
          {pathName === "/registro" ? (
            <>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="********"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="********"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label htmlFor="rol" className="form-label fw-semibold">
                  Rol
                </label>
                <select className="form-select " id="rol">
                  <option value="">Seleccione un rol</option>
                  <option value="cliente">Cliente</option>
                  <option value="operador">Operador</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="estado" className="form-label fw-semibold">
                  Estado
                </label>
                <select className="form-select" id="estado">
                  <option value="">Seleccione un estado</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="d-grid mt-3">
        <button type="submit" className="btn btn-dark fw-semibold">
          Registrar
        </button>
      </div>

      {pathName === "/registro" && (
        <div className="d-grid mt-3">
          <Link to="/" className="btn btn-outline-secondary fw-semibold">
            Volver
          </Link>
        </div>
      )}
    </form>
  );
};
