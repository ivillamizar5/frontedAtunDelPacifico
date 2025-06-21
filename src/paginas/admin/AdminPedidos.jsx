import React, { useEffect, useState } from 'react'
import { Pedidos } from '../../componentes/Pedidos'
import { helpHttp } from '../../helps/helpHttp';

export const AdminPedidos = () => {

  const [db, setdb] = useState(null);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  let api = helpHttp();
  let url = "http://localhost:8081/api/cliente/pedidos";

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

  return (
    <>
    <div className='container mt-3'>
        <Pedidos datapedidos={db}/> 
    </div>
       
    </>
  )
}
