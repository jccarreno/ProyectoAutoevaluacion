import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function PeriodoIndividual({periodo}){
    //Funcion para borrar usuario
    function borrarperiodo(idperiodo){
        axios
        .post('/api/borrarperiodo', { per_id: idperiodo })
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
                        <li className='list-group-item'>ID: {periodo.per_id}</li>
                        <li className='list-group-item'>Nombre: {periodo.per_nombre}</li>
                        <li className='list-group-item'>Inicio: {periodo.per_fechainicio}</li>
                        <li className='list-group-item'>Fin: {periodo.per_fechafin}</li>
                    </ul>

                    <Link to={`/editarperiodo/${periodo.per_id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarperiodo(periodo.per_id)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default PeriodoIndividual