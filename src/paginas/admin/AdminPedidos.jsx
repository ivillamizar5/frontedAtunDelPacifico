import React, { useEffect, useState } from 'react'
import { Pedidos } from '../../componentes/Pedidos'
import { helpHttp } from '../../helps/helpHttp';
import { Table } from '../../componentes/Table';

export const AdminPedidos = () => { 
  
  
  
  const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const api = helpHttp();
  const url = "http://localhost:8081/api/cliente/pedidos";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        setDb(res);
        setError(null);
      } else {
        setDb(null);
        setError(res);
      }
      setLoading(false);
    });
  }, [url]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
  };

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP'
    }).format(value);
  };

  const renderRow = ({ item, modalId }) => (
    <tr key={item.id}>
      <td>{item.cliente.nombre}</td>
      <td>
        <span
          className={`badge ${
            item.estado === "En Proceso"
              ? "text-bg-warning"
              : item.estado === "Pendiente"
              ? "text-bg-secondary"
              : "text-bg-success"
          }`}
        >
          {item.estado}
        </span>
      </td>
      <td>
        <button
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
          onClick={() => setSelectedOrder(item)}
        >
          Ver Detalles
        </button>
      </td>
    </tr>
  );

  if (loading) return <div className="text-center mt-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger mt-5">Error al cargar los datos</div>;

  return (
    <div className="container mt-3">
      <div className="text-center mb-5 mt-3">
        <h1 className="fw-bold">Gestión de Pedidos</h1>
        <p className="text-muted">Consultar pedidos realizados por clientes</p>
      </div>

      {db && (
        <Table
          data={db}
          nombreTabla="Pedidos de Clientes"
          tableHeader={["Nombre del Cliente", "Estado", "Acción"]}
          modalId="orderModal"
          renderRow={renderRow}
        />
      )}

      {/* Modal */}
      <div className="modal fade" id="orderModal" tabIndex="-1" aria-labelledby="orderModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="orderModalLabel">Detalles del Pedido</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              {selectedOrder && (
                <div>
                  <h5>Información del Cliente</h5>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p><strong>Nombre:</strong> {selectedOrder.cliente.nombre}</p>
                      <p><strong>Identificación:</strong> {selectedOrder.cliente.identificacion}</p>
                      <p><strong>Correo:</strong> {selectedOrder.cliente.correo}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Teléfono:</strong> {selectedOrder.cliente.telefono}</p>
                      <p><strong>Dirección:</strong> {selectedOrder.cliente.direccion}</p>
                      <p><strong>Estado:</strong> {selectedOrder.cliente.estado}</p>
                    </div>
                  </div>

                  <h5>Información del Pedido</h5>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p><strong>Fecha de Pedido:</strong> {formatDate(selectedOrder.fechaPedido)}</p>
                      <p><strong>Fecha de Entrega:</strong> {formatDate(selectedOrder.fechaEntrega)}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Total:</strong> {formatCurrency(selectedOrder.total)}</p>
                      <p><strong>Estado:</strong> {selectedOrder.estado}</p>
                    </div>
                  </div>

                  <h5>Detalles de Productos</h5>
                  <div className="table-responsive">
                    <table className="table table-bordered">
                      <thead>
                        <tr>
                          <th>Código Lote</th>
                          <th>Producto</th>
                          <th>Descripción</th>
                          <th>Fecha Producción</th>
                          <th>Cantidad</th>
                          <th>Precio Unitario</th>
                          <th>Subtotal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {selectedOrder.detallePedidos.map((detalle) => (
                          <tr key={detalle.id}>
                            <td>{detalle.lote.codigoLote}</td>
                            <td>{detalle.lote.producto.nombre}</td>
                            <td>{detalle.lote.producto.descripcion}</td>
                            <td>{formatDate(detalle.lote.fechaProduccion)}</td>
                            <td>{detalle.cantidad}</td>
                            <td>{formatCurrency(detalle.lote.producto.precio)}</td>
                            <td>{formatCurrency(detalle.subtotal)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};