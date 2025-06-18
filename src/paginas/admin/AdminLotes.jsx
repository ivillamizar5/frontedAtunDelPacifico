import React, { useEffect, useState } from 'react'
import { Table } from '../../componentes/Table'
import { FromProductoLote } from '../../componentes/FromProductoLote'
import { helpHttp } from '../../helps/helpHttp';


export const AdminLotes = () => {
  const [db, setdb] = useState(null);
  const [dataToEdit, setdataToEdit] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);
 

let api = helpHttp();
let url = "http://localhost:8081/api/operador/lotes";

  useEffect(() => {
  
    api.get(url).then((res) => {
      if (!res.err) {
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
  let options ={
    body:data,
    headers:{"content-type":"application/json"}
  }
   
    api.post(url, options).then((res) => {
      if (!res.err) {
        setdb([...db, data]);
        console.log(data)
      } else {
        seterror(res);
      }
    });
  };


const deleteData = (id) => {
    let options ={
      headers:{"content-type":"application/json"}
    }

    let isDelete = window.confirm(
      `¿Estas seguro de eliminar el registro con el id ${id}`
    );
    if (isDelete) {
      let endpoint = `${url}/${id}`
      api.del(endpoint,options)
      .then(res =>{
        if (!res.err) {
          
          let newData = db.filter((el) => el.id !== id);
          setdb(newData);
        } else {
          seterror(res);
        }
      })
    } else {
      return;
    }
  };



  return (
    <>

    <div className="text-center mb-5 mt-3">
      <h1 className="fw-bold">Gestión de Lotes de Producción</h1>
      <p className="text-muted">Registrar, consultar y marcar productos defectuosos</p>
    </div>
    
    <div className='container mt-3'>
    <FromProductoLote  createData={createData} dataToEdit={dataToEdit} setdataToEdit={setdataToEdit} />
 
    {db &&  (<Table  deleteData={deleteData} data={db} nombreTabla={"Lotes"} setdataToEdit={setdataToEdit}  tableHeaderprops = {["Codigo Lote", "Fecha de Producción","Tipo de Producto", "Cantidad Producida","Estado", "Acción"]}>

    </Table>)}
    
   

</div>

    
    </>
  )
}
