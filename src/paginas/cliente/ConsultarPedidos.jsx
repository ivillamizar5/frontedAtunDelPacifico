


import React from "react";
import { ProductoCard } from "../../componentes/PedidosCliente";


export const ListaProductos = () => {
  const productos = [
    {
      id: 1,
      nombre: "Atún en aceite",
      descripcion: "Lata de 170g con aceite vegetal.",
      precio: 5000,
      lote: "L001"
    },
    {
      id: 2,
      nombre: "Atún en agua",
      descripcion: "Lata de 170g en agua.",
      precio: 4500,
      lote: "L002"
    }
  ];

  return (
    <div className="container mt-4 d-flex flex-wrap">
      {productos.map((prod) => (
        <ProductoCard key={prod.id} producto={prod} />
      ))}
    </div>
  );
};
