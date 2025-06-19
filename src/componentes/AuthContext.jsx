import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { decodeJWT } from '../helps/token';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Función para iniciar sesión
  const login = (token) => {
    localStorage.setItem('token', JSON.stringify(token)); // Almacenar como JSON
    const decoded = decodeJWT(); // Obtener el payload completo
    console.log("Decoded JWT:", decoded); // Depurar el JWT decodificado
    setUser(decoded); // Almacenar el payload como user

    // Redirigir según el rol (normalizar a minúsculas)
    const rol = decoded.role ? decoded.role.toLowerCase() : "";
    switch (rol) {
      case 'administrador':
        navigate('/admin/produccion');
        break;
      case 'operador':
        navigate('/operador/dashboard');
        break;
      case 'cliente':
        console.log("Navegando a cliente/home");
        navigate('/cliente/home');
        break;
      default:
        navigate('/');
    }
  };

  // Función para cerrar sesión
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  // Verificar el token al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decoded = decodeJWT();
        console.log("Decoded JWT en useEffect:", decoded); // Depurar el JWT al cargar
        setUser(decoded);
      } catch (error) {
        console.error("Error decodificando token:", error);
        localStorage.removeItem('token');
        setUser(null);
      }
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};