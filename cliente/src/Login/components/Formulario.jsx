import "./Formulario.css";
import { useState } from "react";
import axios from 'axios';
import md5 from 'md5';
import logo from '../images/escudito.png';

export function Formulario() {

  const baseUrl = "http://localhost:5000";
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);

  axios.defaults.baseURL='http://localhost:5000'

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const iniciarSesion = async() => {

    await axios.post(baseUrl + "/api/obtenercredenciales",{cr_login:userName, cr_clave:md5(password)})
    .then(response =>{
        console.log(response.data)
        return response;
    })
    .then(response => {
      if(Array.isArray(response.data) && response.data.length > 0){
        setUser(response.data[0]);
        switch(response.data[0].cr_tipo){
          case "docente":
            window.location.href = `/docente/${response.data[0].cr_login}`;         
            break;
          case "coordinador":
            window.location.href = `/coordinador`;
            break;
          default:
            setError(true);
            break;
        }
      } else {
        setError(true);
      }
    })    
    .catch(error =>{
        console.log(error);
        setError(true);
    })
  
  }
  

  return (
    <div className="login-box">
      <img className = "avatar" src={logo} alt="logo-unicauca" />
      <h1>Login [Unicauca] </h1>
      <form className="formulario" onSubmit={handleSubmit}>
        <label form="username">Username</label>
        <input
          type="text"
          value={userName}
          name="Username"
          placeholder="Enter Username"
          onChange={(e) => setUserName(e.target.value)}
        />
         <label form="password">Password</label>
        <input
          type="password"
          value={password}
          name="Password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={iniciarSesion}> Iniciar sesion</button>
      </form>
    </div>
  );
}
export default Formulario;
