


import React, { useContext, useEffect, useState } from "react";
import { ProductoCard } from "../../componentes/PedidosCliente";
import { helpHttp } from "../../helps/helpHttp";
import { Table } from "../../componentes/Table";
import { AuthContext } from "../../componentes/AuthContext";

export const ListaProductos = () => { const [db, setDb] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDetail, setSelectedDetail] = useState(null);
  const [orderTotal, setOrderTotal] = useState(null);
  const [orderEstado, setOrderEstado] = useState(null);
  const { user } = useContext(AuthContext); // Obtener la función login del contexto
  

  const id = user.userId; // Filter by order ID
  const api = helpHttp();
  const url = "http://localhost:8081/api/cliente/pedidos";
  console.log("ID del usuario:", id);
  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        // Assuming the API returns the full dataset as provided
        console.log("Datos ", res)
        const filteredOrder = res.find((order) => order.cliente.usuario.id === id);
        if (filteredOrder) {
          setDb(filteredOrder.detallePedidos);
          setOrderTotal(filteredOrder.total);
          setOrderEstado(filteredOrder.estado);
          setError(null);
        } else {
          setDb(null);
          setError({ message: "No se encontró el pedido con el ID especificado" });
        }
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
    <tr key={item.id} className="hover:bg-gray-50 transition-colors">
      <td className="px-6 py-4">{item.lote.producto.nombre}</td>
      <td className="px-6 py-4">{item.cantidad}</td>
      <td className="px-6 py-4">{formatCurrency(orderTotal)}</td>
      <td className="px-6 py-4">
        <span
          className={`badge ${
            orderEstado === "En Proceso"
              ? "text-bg-warning"
              : orderEstado === "Pendiente"
              ? "text-bg-secondary"
              : "text-bg-success"
          }`}
        >
          {orderEstado}
        </span>
      </td>
      <td className="px-6 py-4">
        <button
          className="btn btn-primary btn-sm"
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
          onClick={() => setSelectedDetail(item)}
        >
          Ver Detalles
        </button>
      </td>
    </tr>
  );

  if (loading) return <div className="text-center mt-5">Cargando...</div>;
  if (error) return <div className="alert alert-danger mt-5">Error al cargar los datos: {error.message}</div>;

  return (
    <div className="container mt-3">
      <div className="text-center mb-5 mt-3">
        <h1 className="fw-bold">Gestión de Detalles de Pedidos</h1>
        <p className="text-muted">Consultar detalles del pedido </p>
      </div>

      {db && (
        <Table
          data={db}
          nombreTabla="Detalles de Pedidos"
          tableHeader={["Producto", "Cantidad", "Total Pedido", "Estado Pedido", "Acción"]}
          modalId="detailModal"
          renderRow={renderRow}
        />
      )}

      {/* Modal */}
      <div className="modal fade" id="detailModal" tabIndex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="detailModalLabel">Detalles del Ítem de Pedido</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
            </div>
            <div className="modal-body">
              {selectedDetail && (
                <div>
                  <h5>Información del Producto</h5>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p><strong>Nombre:</strong> {selectedDetail.lote.producto.nombre}</p>
                      <p><strong>Descripción:</strong> {selectedDetail.lote.producto.descripcion}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Precio Unitario:</strong> {formatCurrency(selectedDetail.lote.producto.precio)}</p>
                    </div>
                  </div>

                  <h5>Detalles del Pedido</h5>
                  <div className="row mb-3">
                    <div className="col-md-6">
                      <p><strong>Cantidad Pedida:</strong> {selectedDetail.cantidad}</p>
                      <p><strong>Subtotal:</strong> {formatCurrency(selectedDetail.subtotal)}</p>
                    </div>
                    <div className="col-md-6">
                      <p><strong>Total Pedido:</strong> {formatCurrency(orderTotal)}</p>
                      <p><strong>Estado Pedido:</strong> {orderEstado}</p>
                    </div>
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