import React from "react";

export const RowsTable = ({ el, setdataToEdit, deleteData, modal }) => {
   
  return (
    <>
      <tr>
        <td>{el.codigoLote}</td>
        <td>{el.fechaProduccion}</td>
        <td>{el.producto.nombre}</td>
        <td>{el.cantidad}</td>
        <td>
          <span
            className={`badge ${
              el.estado === "Disponible"
                ? "text-bg-success"
                : "text-bg-secondary"
            }`}
          >
            {el.estado}
          </span>
        </td>
        <td>
          <button onClick={() => setdataToEdit(el)}  data-bs-toggle="modal" data-bs-target={`#${modal}`} className=" ms-3 mt-1  fas fa-edit border border-0 text-primary" ></button>
          <button onClick={() => deleteData(el.id)}  className=" ms-3 mt-1 fas fa-trash-alt border border-0 text-danger"></button>
        </td>
      </tr>
    </>
  );
};
