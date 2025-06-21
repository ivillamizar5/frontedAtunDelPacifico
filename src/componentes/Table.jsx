import React, { useState } from "react";
import { ModalForm } from "./Modal/ModalForm";

export const Table = ({
  nombreTabla,
  tableHeader,
  data,
  renderRow, // Función o componente para renderizar las filas
  modalId, // ID del modal
  modalFormComponent, // Componente del formulario para el modal
  usersPerPage = 10, // Opcional: número de filas por página
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Paginación
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentData = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / usersPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      {modalFormComponent && <ModalForm id={modalId} Componente={modalFormComponent} />}
      <div className="container my-5">
        <div className="card">
          <div className="card-header">Tabla de {nombreTabla}</div>
          <div className="table-responsive">
            <table className="table align-middle mb-0">
              <thead className="table-light">
                <tr>
                  {tableHeader.map((header, index) => (
                    <th key={index}>{header}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.length > 0 ? (
                  currentData.map((item, index) =>
                    renderRow({ item, index, modalId })
                  )
                ) : (
                  <tr>
                    <td colSpan={tableHeader.length}>Sin datos</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          {/* Paginación Bootstrap */}
          <div className="card-footer d-flex justify-content-center">
            <nav>
              <ul className="pagination mb-0">
                {Array.from({ length: totalPages }, (_, i) => (
                  <li
                    className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                    key={i}
                  >
                    <button
                      className="page-link bg-dark text-white"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};












