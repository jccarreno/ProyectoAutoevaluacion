import React,{useState} from 'react'
import axios from 'axios'

function AgregarLabor(){

    const[lab_id,SetId]=useState('')
    const[lab_nombre,SetNombre]=useState('')
    const[lab_horas,SetHoras]=useState('')
    const[tl_id,SetTlId]=useState('')

    function agregarLabor(){
        var labor={
          lab_id,
          lab_nombre,
          lab_horas,
          tl_id
        }
        console.log(labor)
        axios.defaults.baseURL='http://localhost:5000'

        axios
        .post('/api/agregarlabor', labor)
        .then(res => {
            console.log(res.data);
            alert('Labor agregada exitosamente');
        })
        .catch(err => {
            console.log(err);
            alert('Error al agregar la labor');
        });
    }

    return(
    <div className="container">
      <h1 className="text-center">Formulario de Registro</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="lab_id" className="form-label">ID:</label>
          <input type="text" className="form-control" id="lab_id" name="cedula" required value={lab_id} onChange={(e)=>{SetId(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="lab_nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="lab_nombre" name="nombre" required value={lab_nombre} onChange={(e)=>{SetNombre(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="lab_horas" className="form-label">Horas:</label>
          <input type="number" id="puntaje" name="puntaje" min="0" max="100" required value={lab_horas} onChange={(e)=>{SetHoras(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="tl_id" className="form-label">Id del Tipo labor:</label>
            <input type="text" className="form-control" id="tl_id" name="apellido" required value={tl_id} onChange={(e)=>{SetTlId(e.target.value)}}/>
        </div>

        <div className="text-center">
          <button onClick={agregarLabor} type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </div>
    )
}

export default AgregarLabor