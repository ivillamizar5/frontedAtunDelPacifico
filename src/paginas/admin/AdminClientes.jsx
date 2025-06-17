import React from 'react'
import { Table } from '../../componentes/Table'
import { FormRegistro } from '../../componentes/FormRegistro'

export const AdminClientes = () => {
  return (
    <div className='container mt-3'>
        <h5>Gestionar Usuarios</h5>
        <div className='card p-3'>
            <div className='card-header'>Registrar</div>
            <FormRegistro/>
        </div>
        <Table/>        
    </div>
  )
}
