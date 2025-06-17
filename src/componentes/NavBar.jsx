import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-withe shadow-sm">
      <div className="container">
        <a
          className="navbar-brand fw-bold text-black d-flex align-items-center gap-2"
          href="#"
        >
          <i className="fas fa-fish"></i>
          BlueBrand
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
                
              <NavLink
                to="/admin/produccion"
                className={({ isActive }) =>
                  isActive ? "nav-link text-dark border-bottom border-3 border-dark" : "nav-link text-secondary"
                }
              >
                Producción
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/pedidos"
                className={({ isActive }) =>
                  isActive ? "nav-link text-dark border-bottom border-3 border-dark" : "nav-link text-secondary"
                }
              >
                Pedidos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/clientes"
                className={({ isActive }) =>
                  isActive ? "nav-link text-dark border-bottom border-3 border-dark" : "nav-link text-secondary"
                }
              >
                Clientes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/admin/reportes"
                className={({ isActive }) =>
                  isActive ? "nav-link text-dark border-bottom border-3 border-dark" : "nav-link text-secondary"
                }
              >
                Reportes
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
