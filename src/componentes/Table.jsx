import React, { useState } from "react";
import { ModalFormUsuarios } from "./ModalFormUsuarios.";
import { ModalEliminar } from "./ModalEliminar";

  const header = ["USUARIO","FUNCIÓN","ESTADO","ACCIÓN"];
  const users = [
    {
      name: "John Michael",
      email: "john@creative-tim.com",
      role: "Manager",
      area: "Organization",
      status: "ONLINE",
    },
    {
      name: "Alexa Liras",
      email: "alexa@creative-tim.com",
      role: "Programator",
      area: "Developer",
      status: "OFFLINE",
    },
    {
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      role: "Programator",
      area: "Developer",
      status: "ONLINE",
    },
    {
      name: "Bruce Mars",
      email: "bruce@creative-tim.com",
      role: "Manager",
      area: "Executive",
      status: "OFFLINE",
    },
    {
      name: "Alexander",
      email: "alexander@creative-tim.com",
      role: "Programator",
      area: "Developer",
      status: "OFFLINE",
    },
  ];


export const Table = ({nombreTabla, tableHeaderprops}) => {

 const [tableHeader, setTableHeader] = useState(tableHeaderprops || header)

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Paginación
  const indexOfLast = currentPage * usersPerPage;
  const indexOfFirst = indexOfLast - usersPerPage;
  const currentUsers = users.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(users.length / usersPerPage);

  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber); 

  return (
   <>
    <ModalFormUsuarios/>
    <ModalEliminar/>
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
              {currentUsers.map((user, i) => (
                <tr key={i}>
                  <td>
                    <div className="fw-bold">{user.name}</div>
                    <div className="text-muted small">{user.email}</div>
                  </td>
                  <td>
                    <div className="fw-semibold">{user.role}</div>
                  </td>
                  <td>
                    <span
                      className={`badge ${
                        user.status === "ONLINE"
                          ? "text-bg-success"
                          : "text-bg-secondary"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <button   data-bs-toggle="modal"  data-bs-target="#exampleModal" className=" ms-3 mt-1  fas fa-edit border border-0 text-primary">
                    </button>
                    <button  data-bs-toggle="modal" data-bs-target="#staticBackdrop" className=" ms-3 mt-1 fas fa-trash-alt border border-0 text-danger">
                      
                    </button>
                  </td>
                </tr>
              ))}
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
