import React from 'react'
import { FormRegistro } from '../componentes/FormRegistro'

export const Registrarse = () => {
  return (
<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4  rounded bg-white">

        <div className="container  rounded">
      <h2 className="text-center fw-bold mb-3">Registrarse</h2>
      <p className="text-center text-muted mb-4">
        Complete el formulario para crear una cuenta.
      </p>
        <FormRegistro/>
        </div>
      </div>
    </div>
  )
}
