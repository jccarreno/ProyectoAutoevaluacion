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
                        <li className='list-group-item'>ID: {evaluacion.eva_id}</li>
                        <li className='list-group-item'>Estado: {evaluacion.eva_estado}</li>
                        <li className='list-group-item'>Puntaje: {evaluacion.eva_puntaje}</li>
                        <li className='list-group-item'>Resultado: {evaluacion.eva_resultado}</li>
                        <li className='list-group-item'>ID Labor: {evaluacion.lab_id}</li>
                        <li className='list-group-item'>ID Periodo: {evaluacion.per_id}</li>
                        <li className='list-group-item'>ID usuario: {evaluacion.usr_id}</li>
                        <li className='list-group-item'>ID rol: {evaluacion.rol_id}</li>
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