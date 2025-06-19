import React from 'react'
import { FormRegistro } from '../componentes/FormRegistro'

const initialForm = {
  correo: "",
  direccion: "",
  estado: "",
  id: null,
  password:"",
  identificacion: "",
  nombre: "",
  telefono: "",
};


export const Registrarse = () => {

  const [form, setform] = useState(initialForm);


  const handleChange = (e) => {
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario actual:", form);

    // Validaciones
    if (!form.correo) {
      alert("Datos incompletos: correo");
      return;
    }
    if (!form.direccion) {
      alert("Datos incompletos: direccion");
      return;
    }
    if (!form.estado) {
      alert("Datos incompletos: estado");
      return;
    }
    if (!form.identificacion) {
      alert("Datos incompletos: identificacion");
      return;
    }
    if (!form.nombre) {
      alert("Datos incompletos: nombre");
      return;
    }

    if (!form.telefono) {
      alert("Datos incompletos: telefono");
      return;
    }

    setform(initialForm);

}

  return (
<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="p-4  rounded bg-white">

        <div className="container  rounded">
      <h2 className="text-center fw-bold mb-3">Registrarse</h2>
      <p className="text-center text-muted mb-4">
        Complete el formulario para crear una cuenta.
      </p>
        <FormRegistro/>
        </div>
      </div>
    </div>
  )
}
