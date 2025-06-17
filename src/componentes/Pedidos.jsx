import React from "react";

export const Pedidos = ({ datapedidos }) => {
  return (
    <>
              <div className="col-md-6">
            <label htmlFor="buscarCliente" className="form-label fw-semibold">
              Buscar por nombre o identificación
            </label>
            <input
              type="text"
              className="form-control"
              id="buscarCliente"
              placeholder="Ej: Distribuidora Norte o 900123456"
            />
          </div>
          {/* Select de clientes */}
          <div className="col-md-4">
            <label htmlFor="selectCliente" className="form-label fw-semibold">
              Filtrar por cliente
            </label>
            <select className="form-select" id="selectCliente">
              <option value="">Todos</option>
              <option value={1}>Distribuidora Norte</option>
              <option value={2}>Supermercado Sur</option>
            </select>
          </div>
      {datapedidos ? (
        <>
          <hr />
          <h4 className="text-black fw-bold mt-3">Lista de productos</h4>

          <div class="row">
            <div class="col-sm-6 mb-4 col-lg-4">
              <div class="card  rounded-4 border-0">
                <div class="card-body">
                  <h5 class="card-title text-black fw-bold mb-3">
                    Producto: Atún en agua
                  </h5>

                  <ul class="list-unstyled mb-4">
                    <li>
                      <strong>Cliente:</strong> Distribuidora Norte
                    </li>
                    <li>
                      <strong>ID Cliente:</strong> 900123456
                    </li>
                    <li>
                      <strong>Pedido:</strong> 2025-06-10
                    </li>
                    <li>
                      <strong>Entrega:</strong> 2025-06-10
                    </li>
                    <li>
                      <strong>Estado:</strong>{" "}
                      <span class="badge bg-warning text-dark">En Proceso</span>
                    </li>
                    <li>
                      <strong>Cantidad:</strong> 200 unidades
                    </li>
                    <li>
                      <strong>Subtotal:</strong> $70,000
                    </li>
                  </ul>

                  <a href="#" class="btn btn-outline-primary w-100 fw-semibold">
                    Ver más detalles
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        
            <p className="mt-5 fw-semibold">No hay pedidos</p>
        
        
      )}

    </>
  );
};
