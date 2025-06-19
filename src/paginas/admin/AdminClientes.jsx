import React, { useEffect, useState } from "react";
import { Table } from "../../componentes/Table";
import { FormRegistro } from "../../componentes/FormRegistro";
import { helpHttp } from "../../helps/helpHttp";

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
        console.log(res);
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
        setdb([...db, res]);
      } else {
        seterror(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? res : el));
        setdb(newData);
      } else {
        seterror(res);
      }
    });
  };

  const deleteData = (id) => {
    let options = {
      headers: { "content-type": "application/json" },
    };

    let isDelete = window.confirm(
      `¿Estás seguro de eliminar el registro con el id ${id}?`
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
    }
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
          onClick={() => {
            setdataToEdit(item);
            const modal = new window.bootstrap.Modal(
              document.getElementById(modalId)
            );
            modal.show();
          }}
          className="ms-3 mt-1 fas fa-edit border border-0 text-primary"
        ></button>
        <button
          onClick={() => deleteData(item.id)}
          className="ms-3 mt-1 fas fa-trash-alt border border-0 text-danger"
        ></button>
      </td>
    </tr>
  );

  return (
    <>
      <div className="text-center mb-5 mt-3">
        <h1 className="fw-bold">Gestión Usuarios</h1>
        <p className="text-muted">Registrar, consultar</p>
      </div>

      <div className="container mt-3">
        <FormRegistro
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setdataToEdit={setdataToEdit}
          isModal={false}
        />

        {db && (
          <Table
            deleteData={deleteData}
            data={db}
            nombreTabla={"Usuarios registrados"}
            setdataToEdit={setdataToEdit}
            tableHeader={[
              "Nombre",
              "Identificación",
              "Teléfono",
              "Dirección",
              "Estado",
              "Acción",
            ]}
            modalId="editClienteModal"
            modalFormComponent={
              <FormRegistro
                createData={createData}
                updateData={updateData}
                dataToEdit={dataToEdit}
                setdataToEdit={setdataToEdit}
                isModal={true}
              />
            }
            renderRow={renderRow}
          />
        )}
      </div>
    </>
  );
};