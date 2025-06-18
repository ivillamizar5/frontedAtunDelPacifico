import React, { useState } from 'react'
import FormLogin from '../componentes/FormLogin'
import { helpHttp } from '../helps/helpHttp';
import { getCookie, token } from '../helps/token';
import { Louder } from '../componentes/Louder';


const initialState = {
  email: "",
  password: ""
}


export const Login = () => {

  const [loading, setloading] = useState(false);
  const [msg, setmsg] = useState(null);
  const [datos, setDatos] = useState(initialState);
   

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDatos({
      ...datos,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    datosLogin(datos);
    
  };

  let url = "http://localhost:8081/api/auth/login";
  const api = helpHttp();


  const datosLogin = (data) => {
    let options ={
      body:data,
      headers:{"content-type":"application/json"}
    }
    setloading(true);
      api.post(url, options)
      .then((res) => {
        if (!res.err) {
          token(res.token);
          console.log(res);
          console.log("Cookie token: ", getCookie("token"));
          
        } else {
          console.log("Error en el login", res);
          setTimeout(() => {
            setmsg(null);
          }, 3000);
          setmsg(res);
         
        }
        setloading(false);
      });
    };
    
  return (
     <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
  
      <div className="p-4  rounded bg-white">
     {loading ? <Louder /> :  <FormLogin msg={msg} handleChange={handleChange}  handleSubmit={handleSubmit}/>
    }
        
      </div>
    </div>
  )
}
