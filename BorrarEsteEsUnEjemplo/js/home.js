// public/js/home.js
import { parseJwt } from "../js/auth.js";

const token = localStorage.getItem("token");
const data = parseJwt(token);

if (data?.role !== "VENDEDOR") {
  alert("Acceso denegado");
  window.location.href = "./login.html";
}

function logout() {
  console.log("cerrar sesion");
  localStorage.removeItem("token");
  window.location.href = "../login.html";
}

window.logout = logout;
