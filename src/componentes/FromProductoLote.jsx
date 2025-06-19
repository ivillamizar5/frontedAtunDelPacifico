import React, { useEffect, useState } from "react";

const initialForm = {
  id: null,
  codigo_lote: "",
  fecha_produccion: "",
  producto_id: "",
  cantidad: "",
  estado: "",
};

export const FromProductoLote = ({
  createData,
  dataToEdit,
  setdataToEdit,
}) => {
  const [form, setform] = useState(initialForm);

  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (dataToEdit) {
      console.log("Editar", dataToEdit);
      setform({
        id: dataToEdit.id,
        codigo_lote: dataToEdit.codigoLote,
        fecha_produccion: dataToEdit.fechaProduccion,
        producto_id: dataToEdit.producto.id,
        cantidad: dataToEdit.cantidad,
        estado: dataToEdit.estado,
      });
    } else {
      setform(initialForm);
    }
  }, [dataToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario actual:", form);

    // Validaciones
    if (!form.codigo_lote) {
      alert("Datos incompletos: código de lote");
      return;
    }
    if (!form.fecha_produccion) {
      alert("Datos incompletos: fecha de producción");
      return;
    }
    if (!form.producto_id) {
      alert("Datos incompletos: tipo de producto");
      return;
    }
    if (!form.cantidad) {
      alert("Datos incompletos: cantidad");
      return;
    }
    if (!form.estado) {
      alert("Datos incompletos: estado");
      return;
    }

    // Transformar el form al formato esperado por el backend
    const formattedData = {
      codigoLote: form.codigo_lote,
      fechaProduccion: form.fecha_produccion,
      producto: {
        id: parseInt(form.producto_id), // Convertir a número
      },
      cantidad: parseInt(form.cantidad), // Convertir a número
      estado: form.estado,
    };

    // Incluir id solo si existe (para edición)
    if (form.id !== null) {
      formattedData.id = form.id;
    }

    console.log("Datos enviados:", formattedData);

    // Enviar datos
    if (form.id === null) {
      createData(formattedData);
    } else {
      console.log("actualizar--")
      // updateData(formattedData); // Descomentar si implementas updateData
    }

    handleReset();
  };

  const handleReset = () => {
    setform(initialForm);
    setdataToEdit(null);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="codigo_lote" className="form-label">
                Código de Lote
              </label>
              <input
                type="text"
                className="form-control"
                id="codigo_lote"
                placeholder="Ej: L005"
                required
                value={form.codigo_lote}
                name="codigo_lote"
                onChange={handleChange}
              />
              <label htmlFor="fecha_produccion" className="form-label">
                Fecha de Producción
              </label>
              <input
                type="date"
                className="form-control"
                id="fecha_produccion"
                required
                value={form.fecha_produccion}
                name="fecha_produccion"
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="producto_id" className="form-label">
                Tipo de Producto
              </label>
              <select
                className="form-select"
                id="producto_id"
                required
                value={form.producto_id}
                name="producto_id"
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="1">Atún en aceite</option>
                <option value="2">Atún en agua</option>
                <option value="3">Atún en salsa</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="cantidad" className="form-label">
                Cantidad Producida
              </label>
              <input
                type="number"
                className="form-control"
                id="cantidad"
                required
                name="cantidad"
                value={form.cantidad}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label htmlFor="estado" className="form-label">
                Estado
              </label>
              <select
                className="form-select"
                id="estado"
                required
                name="estado"
                value={form.estado}
                onChange={handleChange}
              >
                <option value="">Seleccione</option>
                <option value="Disponible">Disponible</option>
                <option value="En_Proceso">En Proceso</option>
                <option value="Enviado">Enviado</option>
                <option value="Cancelado">Cancelado</option>
              </select>
            </div>
          </div>
        </div>

        <div className="d-grid mt-3">
          <button type="submit" className="btn btn-dark fw-semibold">
            Registrar Lote
          </button>
        </div>
      </form>
    </>
  );
};