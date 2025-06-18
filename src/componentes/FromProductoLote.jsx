import React, { useEffect, useState } from "react";

const initialForm = {
  id:null,
  codigo_lote: "",
  fecha_produccion: "",
  producto_id: "",
  cantidad: "",
  estado: "",
};

export const FromProductoLote = ({
  createData,
  //updateData,
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
      console.log("Editar")
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
    console.log(form)
    if (!form.codigo_lote) {
      console.log(form.codigo_lote);
      alert("Datos incompletos codigo_lote");
      return;
    }

    if (!form.fecha_produccion) {
      console.log(!form.fecha_produccion);
      alert("Datos incompletos fecha_produccion");
      return;
    }

    if (!form.producto_id) {
      console.log(!form.producto_id);
      alert("Datos incompletos producto_id");
      return;
    }

    if (!form.cantidad) {
      console.log(!form.cantidad);
      alert("Datos incompletos");
      return;
    }
    if (!form.estado) {
      console.log(!form.estado);
      alert("Datos incompletos ",form.estado);
      return;
    }

    // validamos si id es null creamos, si id trae el id actualizamos
    if (form.id === null) {
      createData(form);
      console.log("creado", form);
    } else {
     // updateData(form);
    }
    handleReset();
  };

  const handleReset = (e) => {
    setform(initialForm);
    setdataToEdit(null);
  };
  

  return (
    <>


      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <>
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
              </>
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
              <>
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
              </>
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
