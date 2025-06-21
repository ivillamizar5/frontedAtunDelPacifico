import { useState } from "react";

export const ModalClintePedido = ({ modalId, producto }) => {
  const [cantidad, setCantidad] = useState(1);

  const handleCantidadChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setCantidad(value);
  };

  return (
    <>
      <div
        className="modal fade"
        id={modalId}
        tabIndex="-1"
        aria-labelledby={`${modalId}-label`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`${modalId}-label`}>
                Detalles del producto
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Cerrar"
              ></button>
            </div>

            <div className="modal-body">
              <p>
                <strong>Nombre:</strong> producto.nombre
              </p>
              <p>
                <strong>Descripción:</strong> producto.descripcion
              </p>
              <p>
                <strong>Precio unitario:</strong> producto.precio
              </p>
              <p>
                <strong>Lote:</strong> producto.lote
              </p>

              <div className="mb-3">
                <label className="form-label">Cantidad</label>
                <input
                  type="number"
                  className="form-control"
                  value={cantidad}
                  onChange={handleCantidadChange}
                  min={1}
                />
              </div>

              <p>
                <strong>Precio total: $ </strong>
              </p>
            </div>

            <div className="modal-footer">
              <button
                className="btn btn-success"
                onClick={() => {
                  alert(
                    `Pedido realizado: ${cantidad} unidades de producto.nombre`
                  );
                }}
              >
                Realizar pedido
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
