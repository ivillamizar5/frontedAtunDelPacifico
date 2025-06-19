import React from "react";
import { Link, useLocation } from "react-router-dom";

export const FormRegistro = () => {
  const location = useLocation();
  const pathName = location.pathname;

  return (
    <form>
      <div className="row">
        {/* Primera columna */}
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label fw-semibold">
              Nombre de la empresa o cliente
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Juan Pérez"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="identificación" className="form-label fw-semibold">
              RUC o identificación
            </label>
            <input
              type="text"
              className="form-control"
              id="identificación"
              placeholder="identificación"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label fw-semibold">
              Correo electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@mail.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="telefono" className="form-label fw-semibold">
              Teléfono
            </label>
            <input
              type="text"
              maxLength={10}
              className="form-control"
              id="telefono"
              placeholder="3001234567"
            />
          </div>
        </div>

        {/* Segunda columna */}
        <div className="col-md-6">
          {pathName === "/registro" ? (
            <>
              <div className="mb-3">
                <label htmlFor="password" className="form-label fw-semibold">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="********"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="confirmPassword"
                  className="form-label fw-semibold"
                >
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="********"
                />
              </div>
            </>
          ) : (
            <>
              <div className="mb-3">
                <label htmlFor="rol" className="form-label fw-semibold">
                  Rol
                </label>
                <select className="form-select " id="rol">
                  <option value="">Seleccione un rol</option>
                  <option value="cliente">Cliente</option>
                  <option value="operador">Operador</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="estado" className="form-label fw-semibold">
                  Estado
                </label>
                <select className="form-select" id="estado">
                  <option value="">Seleccione un estado</option>
                  <option value="Activo">Activo</option>
                  <option value="Inactivo">Inactivo</option>
                </select>
              </div>
            </>
          )}
        </div>
      </div>

      <div className="d-grid mt-3">
        <button type="submit" className="btn btn-dark fw-semibold">
          Registrar
        </button>
      </div>

      {pathName === "/registro" && (
        <div className="d-grid mt-3">
          <Link to="/" className="btn btn-outline-secondary fw-semibold">
            Volver
          </Link>
        </div>
      )}
    </form>
  );
};




// import React, { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const initialForm = {
//   correo: "",
//   direccion: "",
//   estado: "",
//   id: null,
//   identificacion: "",
//   nombre: "",
//   telefono: "",
// };

// export const FormRegistro = ({createData, dataToEdit, setdataToEdit}) => {
//   const [form, setform] = useState(initialForm);

//   const handleChange = (e) => {
//     setform({
//       ...form,
//       [e.target.name]: e.target.value,
//     });
//   };

//  useEffect(() => {
//     if (dataToEdit) {
//       console.log("Editar", dataToEdit);
//       setform({
//         id: dataToEdit.id,
//         correo: dataToEdit.correo,
//         direccion: dataToEdit.direccion,
//         estado: dataToEdit.estado,
//         identificacion: dataToEdit.identificacion,
//         nombre: dataToEdit.nombre,
//         telefono: dataToEdit.telefono,
//       });
//     } else {
//       setform(initialForm);
//     }
//   }, [dataToEdit]);



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Formulario actual:", form);

//     // Validaciones
//     if (!form.correo) {
//       alert("Datos incompletos: correo");
//       return;
//     }
//     if (!form.direccion) {
//       alert("Datos incompletos: direccion");
//       return;
//     }
//     if (!form.estado) {
//       alert("Datos incompletos: estado");
//       return;
//     }
//     if (!form.identificacion) {
//       alert("Datos incompletos: identificacion");
//       return;
//     }

//     if (form.password === undefined || form.password === null) {
//       return;
//     }else if(!form.password ){ 
//       alert("Datos incompletos: Contraseña");
//       return;
//     }

//     if (!form.nombre) {
//       alert("Datos incompletos: nombre");
//       return;
//     }

//     if (!form.telefono) {
//       alert("Datos incompletos: telefono");
//       return;
//     }


//     // Incluir id solo si existe (para edición)
//     if (form.id !== null) {
//       form.id = form.id;
//     }

//     console.log("Datos enviados:", form);

//     // Enviar datos
//     if (form.id === null) {
//         console.log(form)
//       createData(form);
//     } else {
//       console.log("actualizar--")
//       // updateData(formattedData); // Descomentar si implementas updateData
//     }

//     handleReset();
//   };

//   const handleReset = () => {
//     setform(initialForm);
//     setdataToEdit(null);
//   };


//   const location = useLocation();
//   const pathName = location.pathname;


//   if(pathName === "/registro" ){
//     setform()
//   }



//   return (
//     <form onSubmit={handleSubmit}>
//       <div className="row">
//         {/* Primera columna */}
//         <div className="col-md-6">
//           <div className="mb-3">
//             <label htmlFor="name" className="form-label fw-semibold">
//               Nombre de la empresa o cliente
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="name"
//               placeholder="Juan Pérez"
//               value={form.nombre}
//               onChange={handleChange}
//               name="nombre"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="identificación" className="form-label fw-semibold">
//               RUC o identificación
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="identificación"
//               placeholder="identificación"
//               value={form.identificacion}
//               onChange={handleChange}
//               name="identificacion"

//             />
//           </div>

//           <div className="mb-3">
//             <label htmlFor="direccion" className="form-label fw-semibold">
//               Direccion
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="direccion"
//               placeholder="Direccion"
//               value={form.direccion}
//               onChange={handleChange}
//               name="direccion"

//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="correo" className="form-label fw-semibold">
//               Correo electrónico
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="correo"
//               placeholder="name@mail.com"
//               value={form.correo}
//               onChange={handleChange}
//               name="correo"
//             />
//           </div>
//           <div className="mb-3">
//             <label htmlFor="telefono" className="form-label fw-semibold">
//               Teléfono
//             </label>
//             <input
//               type="text"
//               maxLength={10}
//               className="form-control"
//               id="telefono"
//               placeholder="3001234567"
//               value={form.telefono}
//               onChange={handleChange}
//               name="telefono"
//             />
//           </div>
//         </div>

//         {/* Segunda columna */}
//         <div className="col-md-6">
//           {pathName === "/registro" ? (
//             <>
//               <div className="mb-3">
//                 <label htmlFor="password" className="form-label fw-semibold">
//                   Contraseña
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="password"
//                   placeholder="********"
//                   // name="password"
//                   // onChange={handleChange}
//                 />
//               </div>
//               <div className="mb-4">
//                 <label
//                   htmlFor="confirmPassword"
//                   className="form-label fw-semibold"
//                 >
//                   Confirmar contraseña
//                 </label>
//                 <input
//                   type="password"
//                   className="form-control"
//                   id="confirmPassword"
//                   placeholder="********"
//                 />
//               </div>
//             </>
//           ) : (
//             <>
//               <div className="mb-3">
//                 <label htmlFor="rol" className="form-label fw-semibold">
//                   Rol
//                 </label>
//                 <select className="form-select " id="rol" onChange={handleChange} value={"Cliente"} >  {/* Verificar */}
//                   <option value="">Seleccione un rol</option>
//                   <option value="cliente">Cliente</option>
//                   <option value="operador">Operador</option>
//                 </select>
//               </div>
//               <div className="mb-3">
//                 <label htmlFor="estado" className="form-label fw-semibold">
//                   Estado
//                 </label>
//                 <select className="form-select" id="estado" onChange={handleChange} value={form.estado} name="estado">
//                   <option value="">Seleccione un estado</option>
//                   <option value="Activo">Activo</option>
//                   <option value="Inactivo">Inactivo</option>
//                 </select>
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       <div className="d-grid mt-3">
//         <button type="submit" className="btn btn-dark fw-semibold">
//           Registrar
//         </button>
//       </div>

//       {pathName === "/registro" && (
//         <div className="d-grid mt-3">
//           <Link to="/" className="btn btn-outline-secondary fw-semibold">
//             Volver
//           </Link>
//         </div>
//       )}
//     </form>
//   );
// };
