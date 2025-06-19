import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const initialForm = {
  correo: "",
  direccion: "",
  estado: "Activo",
  id: null,
  identificacion: "",
  nombre: "",
  telefono: "",
  password: "",
  confirmPassword: "",
};

export const FormRegistro = ({
  createData,
  updateData,
  dataToEdit,
  setdataToEdit,
  isModal = false,
}) => {
  const [form, setform] = useState(initialForm);
  const location = useLocation();
  const pathName = location.pathname;

  // Prefijo para IDs únicos
  const idPrefix = isModal ? "modal-" : "form-";

  useEffect(() => {
    if (dataToEdit && isModal) {
      console.log("Editando en modal:", dataToEdit);
      setform({
        id: dataToEdit.id,
        correo: dataToEdit.correo,
        direccion: dataToEdit.direccion,
        estado: dataToEdit.estado,
        identificacion: dataToEdit.identificacion,
        nombre: dataToEdit.nombre,
        telefono: dataToEdit.telefono,
        password: "",
        confirmPassword: "",
      });
    } else {
      setform(initialForm);
    }
  }, [dataToEdit, isModal]);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario actual:", form);

    // Validaciones
    if (!form.correo) {
      alert("Datos incompletos: correo");
      return;
    }
    if (!form.direccion) {
      alert("Datos incompletos: dirección");
      return;
    }
    if (!form.identificacion) {
      alert("Datos incompletos: identificación");
      return;
    }
    if (!form.nombre) {
      alert("Datos incompletos: nombre");
      return;
    }
    if (!form.telefono) {
      alert("Datos incompletos: teléfono");
      return;
    }

    // Validaciones específicas
    if (pathName === "/registro" || isModal) {
      if (!form.password) {
        alert("Datos incompletos: contraseña");
        return;
      }
      if (form.password !== form.confirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
    }

    if (isModal && !form.estado) {
      alert("Datos incompletos: estado");
      return;
    }

    // Preparar datos para enviar
    const formattedData = {
      correo: form.correo,
      direccion: form.direccion,
      identificacion: form.identificacion,
      nombre: form.nombre,
      telefono: form.telefono,
    };

    if (form.id !== null) {
      formattedData.id = form.id;
    }

    if (pathName === "/registro" || (isModal && form.password)) {
      formattedData.password = form.password;
    }

    if (isModal) {
      formattedData.estado = form.estado;
      formattedData.rol = form.rol || "cliente";
    }

    console.log("Datos enviados:", formattedData);

    // Enviar datos
    if (form.id === null) {
      createData(formattedData);
    } else {
      updateData(formattedData);
    }

    handleReset();
  };

  const handleReset = () => {
    setform(initialForm);
    setdataToEdit(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        {/* Primera columna */}
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor={`${idPrefix}nombre`} className="form-label fw-semibold">
              Nombre de la empresa o cliente
            </label>
            <input
              type="text"
              className="form-control"
              id={`${idPrefix}nombre`}
              placeholder="Juan Pérez"
              value={form.nombre}
              onChange={handleChange}
              name="nombre"
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`${idPrefix}identificacion`} className="form-label fw-semibold">
              RUC o identificación
            </label>
            <input
              type="text"
              className="form-control"
              id={`${idPrefix}identificacion`}
              placeholder="Identificación"
              value={form.identificacion}
              onChange={handleChange}
              name="identificacion"
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`${idPrefix}direccion`} className="form-label fw-semibold">
              Dirección
            </label>
            <input
              type="text"
              className="form-control"
              id={`${idPrefix}direccion`}
              placeholder="Dirección"
              value={form.direccion}
              onChange={handleChange}
              name="direccion"
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`${idPrefix}correo`} className="form-label fw-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id={`${idPrefix}correo`}
              placeholder="name@mail.com"
              value={form.correo}
              onChange={handleChange}
              name="correo"
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`${idPrefix}telefono`} className="form-label fw-semibold">
              Teléfono
            </label>
            <input
              type="text"
              maxLength={10}
              className="form-control"
              id={`${idPrefix}telefono`}
              placeholder="3001234567"
              value={form.telefono}
              onChange={handleChange}
              name="telefono"
            />
          </div>
        </div>

        {/* Segunda columna */}
        <div className="col-md-6">
          {(pathName === "/registro" || isModal) && (
            <>
              <div className="mb-3">
                <label htmlFor={`${idPrefix}password`} className="form-label fw-semibold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id={`${idPrefix}password`}
                  placeholder="********"
                  value={form.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor={`${idPrefix}confirmPassword`}
                  className="form-label fw-semibold"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id={`${idPrefix}confirmPassword`}
                  placeholder="********"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  name="confirmPassword"
                />
              </div>
            </>
          )}
          {isModal && (
            <>
              <div className="mb-3">
                <label htmlFor={`${idPrefix}rol`} className="form-label fw-semibold">
                  Rol
                </label>
                <select
                  className="form-select"
                  id={`${idPrefix}rol`}
                  name="rol"
                 

 value={form.rol || "cliente"}
                  onChange={handleChange}
                >
                  <option value="">Seleccione un rol</option>
                  <option value="cliente">Cliente</option>
                  <option value="operador">Operador</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor={`${idPrefix}estado`} className="form-label fw-semibold">
                  Estado
                </label>
                <select
                  className="form-select"
                  id={`${idPrefix}estado`}
                  name="estado"
                  value={form.estado}
                  onChange={handleChange}
                >
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
          {isModal ? "Actualizar" : "Registrar"}
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