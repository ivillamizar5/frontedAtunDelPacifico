import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export const RutaPublica = () => {
  const { user } = useContext(AuthContext);

  if (user) {
    // Si hay usuario autenticado, redirigir según su rol
    const rol = user.rol || user.sub; // Ajustar 
    switch (rol) {
      case 'admin':
        return <Navigate to="/admin/produccion" replace />;
      case 'operador':
        return <Navigate to="/operador/dashboard" replace />;
      case 'cliente':
        return <Navigate to="/cliente/home" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // Si no hay usuario autenticado, permitir acceso a la ruta
  return <Outlet />;
};