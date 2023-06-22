import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

function EditarPeriodo() {
  const params = useParams();


  const[per_nombre,SetNombre]=useState('')
  const[per_fechainicio,SetFechaInicio]=useState('')
  const[per_fechafin,SetFechaFin]=useState('')

  axios.defaults.baseURL = 'http://localhost:5000';

  useEffect(() => {
    if (params.per_id) {
      axios
        .post('/api/obtenerperiodo', { per_id: params.per_id })
        .then((res) => {
          const datalabor = res.data[0];
          console.log(datalabor);
          SetNombre(datalabor.per_nombre);
          SetFechaInicio(datalabor.per_fechainicio);
          SetFechaFin(datalabor.per_fechafin);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params.per_id]);


  function editarPeriodo(event) {
    const actualizarperiodo={
      per_id: params.per_id,
      per_nombre,
      per_fechainicio,
      per_fechafin
    }

    axios.post("/api/actualizarperiodo",actualizarperiodo)
    .then(res=>{
      console.log(res.data)
      alert(res.data)
    })
    .then(err=>{console.log(err)})
  }


  return (
    <div className="container">
      <VistaCoordinador />
    <h1 className="text-center">EDITAR PERIODO</h1>

    <form>
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
        <button onClick={editarPeriodo} type="submit" className="btn btn-primary">Actualizar</button>
      </div>
    </form>
  </div>
  );
}

export default EditarPeriodo;
