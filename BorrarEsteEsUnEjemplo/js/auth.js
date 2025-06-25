export function parseJwt(token) {
  try {
    const payload = token.split('.')[1];
    const decoded = atob(payload);
    console.log(decoded)
    return JSON.parse(decoded);
  } catch (err) {
    return null;
  }
}

export function protegerRuta() {
  const token = localStorage.getItem("token");
  if (!token) {
    window.location.href = "login.html";
    return;
  }

  const data = parseJwt(token);
  if (!data?.role) {
    localStorage.removeItem("token");
    window.location.href = "login.html";
    return;
  }

  switch (data.role) {
    case "ADMIN":
      window.location.href = "admin/dashboard.html";
      break;
    case "VENDEDOR":
      window.location.href = "./vendedor/home.html";
      break;
    case "CLIENTE":
      window.location.href = "cliente/perfil.html";
      break;
    default:
      alert("Rol desconocido");
      localStorage.removeItem("token");
      window.location.href = "login.html";
  }
}
