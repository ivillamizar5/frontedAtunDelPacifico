import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from './AuthContext';


export const RutaProtegida = ({ rolesPermitidos }) => {
  const { user } = useContext(AuthContext);

  if (!user) {
    // Si no hay usuario autenticado, redirigir al login
    return <Navigate to="/" replace />;
  }

  if (!rolesPermitidos.includes(user.sub)) {
    // Si el usuario no tiene el rol permitido, redirigir a Error404
    return <Navigate to="/error404" replace />;
  }

  // Si el usuario está autenticado y tiene el rol correcto, renderizar las rutas hijas
  return <Outlet />;
};