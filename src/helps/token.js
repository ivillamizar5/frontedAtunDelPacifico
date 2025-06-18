
export const token = (token) => {
    if(token){
        console.log("Token guardado en localStorage " , token);
        localStorage.setItem("token", JSON.stringify(token));
    }else{
        localStorage.removeItem("token");
    }
}

// Función para decodificar Base64Url a texto
export function base64Decode(str) {
    const base64 = str.replace(/-/g, '+').replace(/_/g, '/');
    return atob(base64);
}

// Función para decodificar el JWT
export function decodeJWT(token) {
    const parts = token.split('.');
    if (parts.length !== 3) {
        throw new Error('El token no tiene el formato correcto');
    }

    const header = JSON.parse(base64Decode(parts[0]));  // Decodificar encabezado
    const payload = JSON.parse(base64Decode(parts[1]));  // Decodificar payload
    const signature = parts[2];  // La firma no se decodifica, pero la mostramos

    return { header, payload, signature };  // Retorna las tres partes
}