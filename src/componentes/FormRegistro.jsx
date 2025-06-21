import React, { useEffect } from 'react';

export const FormRegistro = ({ createData, setdataToEdit, dataToEdit }) => {
  const initialForm = {
    correo: '',
    direccion: '',
    identificacion: '',
    username: '',
    telefono: '',
    password: '',
    rolId: 3, // Valor por defecto
  };

  const [form, setForm] = React.useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataToEdit]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validación básica
    if (
      !form.correo ||
      !form.direccion ||
      !form.identificacion ||
      !form.username ||
      !form.telefono ||
      !form.password ||
      !form.rolId
    ) {
      alert('Por favor, complete todos los campos');
      return;
    }
    createData(form);
    setForm(initialForm); // Limpiar formulario tras envío
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Nombre de usuario
        </label>
        <input
          type="text"
          className="form-control"
          id="username"
          name="username"
          value={form.username}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="correo" className="form-label">
          Correo electrónico
        </label>
        <input
          type="email"
          className="form-control"
          id="correo"
          name="correo"
          value={form.correo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Contraseña
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="identificacion" className="form-label">
          Identificación
        </label>
        <input
          type="text"
          className="form-control"
          id="identificacion"
          name="identificacion"
          value={form.identificacion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="text"
          className="form-control"
          id="telefono"
          name="telefono"
          value={form.telefono}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="direccion" className="form-label">
          Dirección
        </label>
        <input
          type="text"
          className="form-control"
          id="direccion"
          name="direccion"
          value={form.direccion}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="rolId" className="form-label">
          Rol
        </label>
        <select
          className="form-control"
          id="rolId"
          name="rolId"
          value={form.rolId}
          onChange={handleChange}
          required
        >
          <option value={3}>Usuario regular</option>
          {/* Agrega más opciones según los roles disponibles */}
        </select>
      </div>
      <button type="submit" className="btn btn-primary w-100">
        Registrarse
      </button>
    </form>
  );
};