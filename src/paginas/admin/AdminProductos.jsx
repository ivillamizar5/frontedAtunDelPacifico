import React from 'react'
import { Table } from '../../componentes/Table'
import { FormRegistro } from '../../componentes/FormRegistro'
import { FromProductoLote } from '../../componentes/FromProductoLote'

export const AdminProductos = () => {
  return (
    <>

    <div class="text-center mb-5 mt-3">
      <h1 class="fw-bold">Gestión de Lotes de Producción</h1>
      <p class="text-muted">Registrar, consultar y marcar productos defectuosos</p>
    </div>
    
    <div className='container mt-3'>
    <FromProductoLote/>

  <Table nombreTabla={"Lotes"} tableHeaderprops = {["Cliente", "Estado","Fecha Entrega", "Tipo de Producto","Cantidad Producida", "Acción"]}>

  </Table>
   

</div>

    
    </>
  )
}
