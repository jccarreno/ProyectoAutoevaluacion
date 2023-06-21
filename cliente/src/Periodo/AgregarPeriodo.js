import React,{useState} from 'react'
import axios from 'axios'

function AgregarPeriodo(){

    const[per_id,SetId]=useState('')
    const[per_nombre,SetNombre]=useState('')
    const[per_fechainicio,SetFechaInicio]=useState('')
    const[per_fechafin,SetFechaFin]=useState('')

    function agregarPeriodo(){
        var periodo={
          per_id,
          per_nombre,
          per_fechainicio,
          per_fechafin
        }
        console.log(periodo)
        axios.defaults.baseURL='http://localhost:5000'

        axios
        .post('/api/agregarperiodo', periodo)
        .then(res => {
            console.log(res.data);
            alert('Periodo agregado exitosamente');
        })
        .catch(err => {
            console.log(err);
            alert('Error al agregar el periodo');
        });
    }

    return(
      <div className="container">
        <h1 className="text-center">REGISTRO DE PERIODO</h1>

        <form>
          <div className="mb-3">
            <label htmlFor="lab_id" className="form-label">ID:</label>
            <input type="text" className="form-control" id="per_id" name="per_id" required value={per_id} onChange={(e)=>{SetId(e.target.value)}}/>
          </div>

          <div className="mb-3">
            <label htmlFor="lab_nombre" className="form-label">Nombre:</label>
            <input type="text" className="form-control" id="per_nombre" name="per_nombre" required value={per_nombre} onChange={(e)=>{SetNombre(e.target.value)}}/>
          </div>

          <div className="mb-3">
            <label htmlFor="lab_horas" className="form-label">Fecha Inicio:</label>
            <input type="date" className="form-control" id="per_fechainicio" name="per_fechainicio" required value={per_fechainicio} onChange={(e)=>{SetFechaInicio(e.target.value)}}/>
          </div>

          <div className="mb-3">
            <label htmlFor="tl_id" className="form-label">Fecha Fin:</label>
            <input type="date" className="form-control" id="per_fechafin" name="per_fechafin" required value={per_fechafin} onChange={(e)=>{SetFechaFin(e.target.value)}}/>
          </div>

          <div className="text-center">
            <button onClick={agregarPeriodo} type="submit" className="btn btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    )
}

export default AgregarPeriodo