import { NavBar } from './componentes/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
// import { Login } from './paginas/Login';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import { AdminClientes } from './paginas/admin/AdminClientes';
// import { Registrarse } from './paginas/Registrarse';
// import { AdminPedidos } from './paginas/admin/AdminPedidos';
// import { AdminProductos } from './paginas/admin/AdminProductos';
// import { Error404 } from './componentes/Error404';


// import { OperadorPedidos } from './paginas/operador/OperadorPedidos'; // Asegúrate de crear este componente
// import { OperadorDashboard } from './paginas/operador/OperadorDashboard'; // Asegúrate de crear este componente
// import { ClienteHome } from './paginas/cliente/ClienteHome'; // Asegúrate de crear este componente
// import { ClientePerfil } from './paginas/cliente/ClientePerfil'; // Asegúrate de crear este componente
// import { AdminReportes } from './paginas/admin/AdminReportes'; // Asegúrate de crear este componente
import { AuthProvider } from './componentes/AuthContext';
import { RutaProtegida } from './componentes/RutaProtegida';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './paginas/Login';
import { Registrarse } from './paginas/Registrarse';
import { AdminLotes } from './paginas/admin/AdminLotes';
import { AdminClientes } from './paginas/admin/AdminClientes';
import { AdminPedidos } from './paginas/admin/AdminPedidos';
import { Error404 } from './componentes/Error404';
import { RutaPublica } from './componentes/RutaPublica';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <NavBar />
        <Routes>

          {/* Rutas públicas: solo accesibles para usuarios no autenticados */}
          <Route element={<RutaPublica />}>
            <Route path="/" element={<Login />} />
            <Route path="/registro" element={<Registrarse />} />
          </Route>

          {/* Rutas de Admin */}
          <Route
            path="/admin"
            element={<RutaProtegida rolesPermitidos={['admin']} />}
          >
            <Route path="produccion" element={<AdminLotes />} />
            <Route path="clientes" element={<AdminClientes />} />
            <Route path="pedidos" element={<AdminPedidos />} />
            {/* <Route path="reportes" element={<AdminReportes />} /> */}
          </Route>

          {/* Rutas de Operador 
          <Route
            path="/operador"
            element={<RutaProtegida rolesPermitidos={['operador']} />}
          >
            <Route path="pedidos" element={<OperadorPedidos />} />
            <Route path="dashboard" element={<OperadorDashboard />} />
          </Route>

          {/* Rutas de Cliente 
          <Route
            path="/cliente"
            element={<RutaProtegida rolesPermitidos={['cliente']} />}
          >
            <Route path="home" element={<ClienteHome />} />
            <Route path="perfil" element={<ClientePerfil />} />
          </Route>
*/}
          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;