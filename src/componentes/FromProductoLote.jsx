import React from "react";

export const FromProductoLote = () => {
  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <>
                <label htmlFor="codigoLote" className="form-label">
                  Código de Lote
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="codigoLote"
                  placeholder="Ej: L005"
                  required=""
                />
                <label htmlFor="fechaProduccion" className="form-label">
                  Fecha de Producción
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="fechaProduccion"
                  required=""
                />
              </>
            </div>
            <div className="mb-3">
              <label htmlFor="producto" className="form-label">
                Tipo de Producto
              </label>
              <select className="form-select" id="producto" required="">
                <option value="">Seleccione</option>
                <option value="aceite">Atún en aceite</option>
                <option value="agua">Atún en agua</option>
                <option value="salsa">Atún en salsa</option>
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
                  required=""
                />
              </>
            </div>
          </div>

          <div className="col-md-6">
              <div className="mb-3">
                <label htmlFor="estado" className="form-label">
                  Estado
                </label>
                <select className="form-select" id="estado" required="">
                  <option value="Disponible">Disponible</option>
                  <option value="Vendido">Vendido</option>
                  <option value="Defectuoso">Defectuoso</option>
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
