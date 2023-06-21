import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function UsuarioIndividual({usuario}){
    //Funcion para borrar usuario
    function borrarusuario(idusuario){
        axios
        .post('/api/borrarusuario', { usr_id: idusuario })
        .then((res) => {
            console.log(res.data)
            alert(res.data)
        })
        .catch((error) => {
          console.error(error);
        });
    }


    return(
        <div className="container">
            <div className="row">
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>ID: {usuario.usr_id}</li>
                        <li className='list-group-item'>Nombre: {usuario.usr_nombre}</li>
                        <li className='list-group-item'>Apellidos: {usuario.usr_apellido}</li>
                        <li className='list-group-item'>Genero: {usuario.usr_genero}</li>
                        <li className='list-group-item'>Estudio: {usuario.usr_estudio}</li>
                    </ul>

                    <Link to={`/editarusuario/${usuario.usr_id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario.usr_id)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual