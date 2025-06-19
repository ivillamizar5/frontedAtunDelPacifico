import { NavBar } from './componentes/NavBar';
import '@fortawesome/fontawesome-free/css/all.min.css';
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
import { AdminReportes } from './paginas/admin/AdminReportes';
import { ListaProductos } from './paginas/cliente/ConsultarPedidos';
import Footer from './componentes/Footer';
// import { OperadorPedidos } from './paginas/operador/OperadorPedidos';
// import { OperadorDashboard } from './paginas/operador/OperadorDashboard';
// import { ClienteHome } from './paginas/cliente/ClienteHome';

function App() {
  return (
<>

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
            element={<RutaProtegida rolesPermitidos={['administrador']} />}
          >
            <Route path="produccion" element={<AdminLotes />} />
            <Route path="clientes" element={<AdminClientes />} />
            <Route path="pedidos" element={<AdminPedidos />} />
            <Route path="reportes" element={<AdminReportes />} />
          </Route>

          {/* Rutas de Operador */}
          <Route
            path="/operador"
            element={<RutaProtegida rolesPermitidos={['operador']} />}
          >
            <Route path="pedidos" element={<h1>Operador</h1>} />
            <Route path="dashboard" element={<h1>Dashboard</h1>} />
          </Route>

          {/* Rutas de Cliente */}
          <Route
            path="/cliente"
            element={<RutaProtegida rolesPermitidos={['cliente']} />}
          >
            <Route path="home" element={<h1>Home</h1>} />
            <Route path="listaproductos" element={<ListaProductos />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </AuthProvider>
      <Footer/>
    </BrowserRouter>

    

</>
    
  );
}

export default App;