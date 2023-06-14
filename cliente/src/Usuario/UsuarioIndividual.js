import React from 'react'
import {Link} from 'react-router-dom'

function UsuarioIndividual({usuario}){
    return(
        <div className="container">
            <div className="row">
                <div className='col-sm-6 offset-3'>
                    <ul className='list-group'>
                        <li className='list-group-item'>{usuario.usr_id}</li>
                        <li className='list-group-item'>{usuario.usr_nombre}</li>
                        <li className='list-group-item'>{usuario.usr_apellido}</li>
                        <li className='list-group-item'>{usuario.usr_genero}</li>
                        <li className='list-group-item'>{usuario.usr_estudio}</li>
                    </ul>

                    <Link to={`/editarusuario/${usuario.usr_id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger">Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default UsuarioIndividual