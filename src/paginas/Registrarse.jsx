import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const FormRegistro = ({ createData, setdataToEdit, dataToEdit }) => {
  const location = useLocation();
  // Verify if the current path is exactly '/registrar'
  const isRegistrarRoute = location.pathname === '/registrar';
  // Verify if the current path is '/admin/clientes'
  const isAdminClientesRoute = location.pathname === '/admin/clientes';

  const initialForm = {
    correo: '',
    direccion: '',
    identificacion: '',
    username: '',
    telefono: '',
    password: '',
    rolId: 3, // Default to Cliente
  };

  const [form, setForm] = useState(initialForm);

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

  const handleRoleChange = (e) => {
    const newRolId = parseInt(e.target.value);
    setForm({
      ...form,
      rolId: newRolId,
      ...(newRolId === 2 ? { direccion: '', identificacion: '', telefono: '' } : {}),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const requiredFields = ['username', 'password', 'correo'];
    if (form.rolId === 3) {
      requiredFields.push('direccion', 'identificacion', 'telefono');
    }

    const missingFields = requiredFields.filter((field) => !form[field]);
    if (missingFields.length > 0) {
      alert(`Por favor, complete los siguientes campos: ${missingFields.join(', ')}`);
      return;
    }

    createData(form);
    setForm(initialForm);
  };

  const idPrefix = 'form-registro-';

  return (
    <div data-form="registro-debug">
      <form onSubmit={handleSubmit} className="p-6 max-w-md mx-auto bg-white rounded-lg shadow-md">
        {isAdminClientesRoute && (
          <div className="mb-4">
            <label htmlFor={`${idPrefix}rolId`} className="block text-sm font-medium text-gray-700 mb-1">
              Rol
            </label>
            <select
              id={`${idPrefix}rolId`}
              name="rolId"
              value={form.rolId}
              onChange={handleRoleChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value={3}>Cliente</option>
              <option value={2}>Operador</option>
            </select>
          </div>
        )}

        <div className="mb-4">
          <label htmlFor={`${idPrefix}username`} className="block text-sm font-medium text-gray-700 mb-1">
            Nombre de usuario
          </label>
          <input
            type="text"
            id={`${idPrefix}username`}
            name="username"
            value={form.username}
            onChange={handleChange}
            autoComplete="username"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor={`${idPrefix}correo`} className="block text-sm font-medium text-gray-700 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            id={`${idPrefix}correo`}
            name="correo"
            value={form.correo}
            onChange={handleChange}
            autoComplete="email"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor={`${idPrefix}password`} className="block text-sm font-medium text-gray-700 mb-1">
            Contraseña
          </label>
          <input
            type="password"
            id={`${idPrefix}password`}
            name="password"
            value={form.password}
            onChange={handleChange}
            autoComplete="new-password"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {form.rolId === 3 && (
          <>
            <div className="mb-4">
              <label htmlFor={`${idPrefix}identificacion`} className="block text-sm font-medium text-gray-700 mb-1">
                Identificación
              </label>
              <input
                type="text"
                id={`${idPrefix}identificacion`}
                name="identificacion"
                value={form.identificacion}
                onChange={handleChange}
                autoComplete="off"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor={`${idPrefix}telefono`} className="block text-sm font-medium text-gray-700 mb-1">
                Teléfono
              </label>
              <input
                type="text"
                id={`${idPrefix}telefono`}
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                autoComplete="tel"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor={`${idPrefix}direccion`} className="block text-sm font-medium text-gray-700 mb-1">
                Dirección
              </label>
              <input
                type="text"
                id={`${idPrefix}direccion`}
                name="direccion"
                value={form.direccion}
                onChange={handleChange}
                autoComplete="street-address"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};