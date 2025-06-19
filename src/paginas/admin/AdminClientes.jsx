import React, { useEffect, useState } from "react";
import { Table } from "../../componentes/Table";
import { FormRegistro } from "../../componentes/FormRegistro";
import { helpHttp } from "../../helps/helpHttp";
import { FromProductoLote } from "../../componentes/FromProductoLote";

export const AdminClientes = () => {
  const [db, setdb] = useState(null);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  let api = helpHttp();
  let url = "http://localhost:8081/api/admin/clientes";

  useEffect(() => {
    api.get(url).then((res) => {
      if (!res.err) {
        console.log(res)
        setdb(res);
        seterror(null);
      } else {
        setdb(null);
        seterror(res);
      }
      setloading(false);
    });
  }, [url]);


  const createData = (data) => {
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      if (!res.err) {
        setdb([...db, data]);
        console.log(data);
      } else {
        seterror(res);
      }
    });
  };



  const renderRow = ({ item, modalId }) => (
    <tr key={item.id}>
      <td>{item.nombre}</td>
      <td>{item.identificacion}</td>
      <td>{item.telefono}</td>
      <td>{item.direccion}</td>
      <td>
        <span
          className={`badge ${
            item.estado === "Activo" ? "text-bg-success" : "text-bg-secondary"
          }`}
        >
          {item.estado}
        </span>
      </td>
      <td>
        <button
          onClick={() => setdataToEdit(item)}
          data-bs-toggle="modal"
          data-bs-target={`#${modalId}`}
          className="ms-3 mt-1 fas fa-edit border border-0 text-primary"
        ></button>
        <button
          onClick={() => deleteData(item.id)}
          className="ms-3 mt-1 fas fa-trash-alt border border-0 text-danger"
        ></button>
      </td>
    </tr>
  );

  const deleteData = (id) => {
    let options = {
      headers: { "content-type": "application/json" },
    };

    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id ${id}`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`;
      api.del(endpoint, options).then((res) => {
        if (!res.err) {
          let newData = db.filter((el) => el.id !== id);
          setdb(newData);
        } else {
          seterror(res);
        }
      });
    } else {
      return;
    }
  };


  
  return (
   <>
       <div className="text-center mb-5 mt-3">
         <h1 className="fw-bold">Gestión Usuarios</h1>
         <p className="text-muted">
           Registrar, consultar 
         </p>
       </div>
 
       <div className="container mt-3">
         <FormRegistro
           createData={createData}
           dataToEdit={dataToEdit}
           setdataToEdit={setdataToEdit}
         />
 
         {db && (
           <Table
             deleteData={deleteData}
             data={db}
             nombreTabla={"Usuarios registrados"}
             setdataToEdit={setdataToEdit}
             tableHeader={[
               "Nombre",
               "Identificacion",
               "Telefono",
               "Direccion",
               "Estado",
               "Acción",
             ]}
             modalFormComponent={ 
               <FormRegistro
                 createData={createData}
                 dataToEdit={dataToEdit}
                 setdataToEdit={setdataToEdit}
               />
             }
             renderRow={renderRow}
           ></Table>
         )}
       </div>
     </>
  );
};
