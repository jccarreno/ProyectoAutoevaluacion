import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function UsuarioIndividual({usuario}){
    //Funcion para borrar usuario
    function borrarusuario(idusuario){
        axios
        .post('/api/borrarusuario', { _id: idusuario })
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
                        <li className='list-group-item'>{usuario._id}</li>
                        <li className='list-group-item'>{usuario.usr_nombre}</li>
                        <li className='list-group-item'>{usuario.usr_apellido}</li>
                        <li className='list-group-item'>{usuario.usr_genero}</li>
                        <li className='list-group-item'>{usuario.usr_estudio}</li>
                    </ul>

                    <Link to={`/editarusuario/${usuario._id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarusuario(usuario._id)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual