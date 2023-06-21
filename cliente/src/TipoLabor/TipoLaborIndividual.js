import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios';

function TipoLaborIndividual({tipolabor}){
    //Funcion para borrar usuario
    function borrartipolabor(idtipolabor){
        axios
        .post('/api/borrartipolabor', { tl_id: idtipolabor })
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
                        <li className='list-group-item'>ID: {tipolabor.tl_id}</li>
                        <li className='list-group-item'>Codigo: {tipolabor.tl_codigo}</li>
                        <li className='list-group-item'>Descripcion: {tipolabor.tl_descripcion}</li>
                    </ul>

                    <Link to={`/editartipolabor/${tipolabor.tl_id}`}><li className="btn btn-succes">Editar</li></Link>
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{borrartipolabor(tipolabor.tl_id)}}>Borrar</button>
                    <hr className="mt-4"></hr>
                </div>
            </div>
        </div>
    )
}

export default TipoLaborIndividual