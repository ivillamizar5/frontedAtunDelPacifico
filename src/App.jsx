
import { NavBar } from './componentes/NavBar'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Login } from './paginas/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AdminClientes } from './paginas/admin/AdminClientes';
import { Registrarse } from './paginas/Registrarse';
import { AdminPedidos } from './paginas/admin/AdminPedidos';
import { AdminProductos } from './paginas/admin/AdminProductos';
import { Error404 } from './componentes/Error404';

function App() {
  return (
    <>
      <BrowserRouter>
      {/* <AuthProvider> */}
         <NavBar/>
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/registro" element={<Registrarse />}/>

          
          <Route path="/admin">
             <Route path="/admin/produccion" element={<AdminProductos/>} />
             <Route path="/admin/clientes" element={<AdminClientes/>} />
             <Route path="/admin/pedidos" element={<AdminPedidos/>} />
            
          </Route>
          <Route path="*" element={<Error404/>} />

        </Routes>
        
        {/* </AuthProvider> */}
      </BrowserRouter>
    </>
  )
}

export default App
