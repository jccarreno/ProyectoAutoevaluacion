import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function LaborIndividual({labor}){
    //Funcion para borrar usuario
    function borrarlabor(idlabor){
        axios
        .post('/api/borrarlabor', { lab_id: idlabor })
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
                        <li className='list-group-item'>{labor.lab_id}</li>
                        <li className='list-group-item'>{labor.lab_nombre}</li>
                        <li className='list-group-item'>{labor.lab_horas}</li>
                        <li className='list-group-item'>{labor.tl_id}</li>
                    </ul>

                    <Link to={`/editarlabor/${labor.lab_id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrarlabor(labor.lab_id)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default LaborIndividual