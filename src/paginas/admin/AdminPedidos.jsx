import React, { useState } from 'react'
import { Pedidos } from '../../componentes/Pedidos'

const json = {
  "pedidoId": 1,
  "fechaPedido": "2025-06-10",
  "fechaEntrega": "2025-06-13",
  "estado": "En Proceso",
  "cliente": {
    "id": 1,
    "nombre": "Distribuidora Norte",
    "identificacion": "900123456",
    "correo": "contacto@norte.com",
    "telefono": "3001234567",
    "direccion": "Calle 10 #5-20, Bogotá",
    "estado": "Activo"
  },
  "detallePedido": [
    {
      "lote": {
        "id": 1,
        "codigo_lote": "L001",
        "fecha_produccion": "2025-06-01",
        "cantidad": 1000,
        "estado": "Disponible",
        "producto": {
          "id": 1,
          "nombre": "Atun_en_aceite",
          "descripcion": "Lata de atún en aceite vegetal, 170g"
        }
      },
      "cantidad": 200,
      "subtotal": 70000.00
    },
    {
      "lote": {
        "id": 2,
        "codigo_lote": "L002",
        "fecha_produccion": "2025-06-02",
        "cantidad": 800,
        "estado": "Disponible",
        "producto": {
          "id": 2,
          "nombre": "Atun_en_agua",
          "descripcion": "Lata de atún en agua, 170g"
        }
      },
      "cantidad": 300,
      "subtotal": 90000.00
    },
    {
      "lote": {
        "id": 4,
        "codigo_lote": "L004",
        "fecha_produccion": "2025-06-04",
        "cantidad": 1200,
        "estado": "Disponible",
        "producto": {
          "id": 1,
          "nombre": "Atun_en_aceite",
          "descripcion": "Lata de atún en aceite vegetal, 170g"
        }
      },
      "cantidad": 400,
      "subtotal": 190000.00
    }
  ],
  "total": 350000.00
}



export const AdminPedidos = () => {

    const [datapedidos, setDataPedidos] = useState(true);

    const response = async()=> {
       const response =  await json.JSON();
       console.log(response)
    }
  
    response();
  return (
    <>
    <div className='container mt-3'>
        <Pedidos datapedidos={datapedidos}/> 
    </div>
       
    </>
  )
}
