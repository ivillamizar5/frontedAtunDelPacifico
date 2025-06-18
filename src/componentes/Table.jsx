import React, { useState } from "react";

import { RowsTable } from "./RowsTable";
import { ModalForm } from "./Modal/ModalForm";
import { FormRegistro } from "./FormRegistro";
import { useLocation } from 'react-router-dom';
import { useEffect } from "react";
import { FromProductoLote } from "./FromProductoLote";

export const Table = ({nombreTabla, tableHeaderprops, data, setdataToEdit,deleteData }) => {

 const [tableHeader, setTableHeader] = useState(tableHeaderprops || header)

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Paginación
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = data.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(data.length / usersPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber); 

  const location = useLocation();
  const [nombremodal, setnombremodal] = useState(null);
  const [componente, setcomponente] = useState(null)

useEffect(() => {
 
 switch (location.pathname) {
  case "/admin/produccion":
      setnombremodal("ModalFormLote")
      setcomponente(<FromProductoLote/>)
    break;
 
  default:
    break;
 }

}, [location.pathname])


  return (
   <>
    <ModalForm id={nombremodal} Componente={componente}/>
    <div className="container my-5">
      <div className="card">
        <div className="card-header">Tabla de {nombreTabla}</div>
        <div className="table-responsive">
          <table className="table align-middle mb-0">
            <thead className="table-light">
              <tr>
                {tableHeader.map((e, i) => <th key={i}>{e}</th> )}
              </tr>
            </thead>
            <tbody>

               {currentUsers.length>0 
                ? data.map(el => 
                <RowsTable 
                    key={el.id} 
                    el={el}
                    deleteData={deleteData}
                    setdataToEdit={setdataToEdit}
                    modal={nombremodal}
                />)
                :(  
                <tr>
                    <td colSpan={"12"}> Sin datos</td>
                </tr>
                )
                }
            </tbody>
          </table>
        </div>

        {/* Paginación Bootstrap */}
        <div className="card-footer d-flex justify-content-center">
          <nav>
            <ul className="pagination mb-0">
              {Array.from({ length: totalPages }, (_, i) => {
                return (
                  <li
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                    key={i}
                  >
                    <button
                      className="page-link bg-dark text-white"
                      onClick={() => handlePageChange(i + 1)}
                    >
                      {i + 1}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
   </>
  );
};
