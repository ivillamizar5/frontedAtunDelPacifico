import React from 'react'
import { Link } from 'react-router-dom'

export default function FormLogin() {
  return (
    <>
<div className="container  rounded">
  <h2 className="text-center fw-bold mb-3">Ingresar</h2>
  <p className="text-center text-muted mb-4">
    Ingrese su email y contraseña para ingresar.
  </p>
  <form>
    <div className="mb-3">
      <label htmlFor="email" className="form-label fw-semibold">
        Email
      </label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="name@mail.com"
        required=""
      />
    </div>
    <div className="mb-4">
      <label htmlFor="password" className="form-label fw-semibold">
        Contraseña
      </label>
      <input
        type="password"
        className="form-control"
        id="password"
        placeholder="********"
        required=""
      />
    </div>
    <div className="d-grid">
      <button type="submit" className="btn btn-dark fw-semibold">
        Ingresar
      </button>
    </div>
    <div className="d-grid mt-3">
      <Link to="/registro" className="btn btn-outline-secondary fw-semibold" >
      Registro
      </Link>
    </div>
  </form>
</div>


    </>
  )
}
