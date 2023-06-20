import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function EvaluacionIndividual({evaluacion}){
    //Funcion para borrar usuario
    function borrarevaluacion(idevaluacion){
        axios
        .post('/api/borrarevaluacion', { eva_id: idevaluacion })
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
                        <li className='list-group-item'>{evaluacion.eva_id}</li>
                        <li className='list-group-item'>{evaluacion.eva_estado}</li>
                        <li className='list-group-item'>{evaluacion.eva_puntaje}</li>
                        <li className='list-group-item'>{evaluacion.eva_resultado}</li>
                        <li className='list-group-item'>{evaluacion.lab_id}</li>
                        <li className='list-group-item'>{evaluacion.per_id}</li>
                        <li className='list-group-item'>{evaluacion._id}</li>
                        <li className='list-group-item'>{evaluacion.rol_id}</li>
                    </ul>

                    <Link to={`/editarevaluacion/${evaluacion.eva_id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarevaluacion(evaluacion.eva_id)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default EvaluacionIndividual