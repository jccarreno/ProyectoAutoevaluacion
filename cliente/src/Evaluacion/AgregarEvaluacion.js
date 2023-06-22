import React,{useState} from 'react'
import axios from 'axios'
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

function AgregarEvaluacion(){

  const[eva_id,SetId]=useState('')
  const[eva_estado,SetEstado]=useState('')
  const[eva_puntaje,SetPuntaje]=useState('')
  const[eva_resultado,SetResultado]=useState('')
  const[lab_id,SetLabId]=useState('')
  const[per_id,SetPerId]=useState('')
  const[usr_id,SetUsrId]=useState('')
  const[rol_id,SetRolId]=useState('')

  async function agregarEvaluacion() {
    axios.defaults.baseURL = 'http://localhost:5000';

    // Verificar que la labor existe
    const labor = await axios.post('/api/obtenerlabor', { lab_id })
    console.log(labor.data)
    if(!Array.isArray(labor.data) && !labor.data.lenght) {
      alert('No se encontró ninguna labor con la ID proporcionada');
      return;
    }

    // Verificar que el periodo existe
    const periodo = await axios.post('/api/obtenerperiodo', { per_id })
    console.log(periodo.data)
    if(!Array.isArray(periodo.data) && !periodo.data.lenght) {
      alert('No se encontró ningún periodo con la ID proporcionada');
      return;
    }

    // Verificar que el usuario existe
    const usuario = await axios.post('/api/obtenerusuario', { usr_id })
    console.log(usuario.data)
    if(!Array.isArray(usuario.data) && !usuario.data.lenght) {
      alert('No se encontró ningún usuario con la ID proporcionada');
      return;
    }

    // Verificar que no existe una evaluación con la misma lab_id
    const evaluacionExistente = await axios.post('/api/obtenerevaluacionlabor', { lab_id })
    console.log(evaluacionExistente.data)
    if(Array.isArray(evaluacionExistente.data)) {
      alert('Ya existe una evaluación con la ID de labor proporcionada');
      return;
    }


    // Si todo esta bien, agregar la evaluación
    var evaluacion = {
      eva_id,
      eva_estado,
      eva_puntaje: parseInt(eva_puntaje),
      eva_resultado,
      lab_id,
      per_id,
      usr_id,
      rol_id,
    };

    console.log(evaluacion);

    axios
      .post('/api/agregarevaluacion', evaluacion)
      .then((res) => {
        console.log(res.data);
        alert('Evaluacion agregada exitosamente');
      })
      .catch((err) => {
        console.log(err);
        alert('Error al agregar la Evaluacion');
      });
  }

    return(
      <div className="container">
        <VistaCoordinador />
        <h1 className="text-center">REGISTRAR EVALUACION</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="id" className="form-label">ID:</label>
            <input type="text" className="form-control" id="eva_id" name="cedula" required value={eva_id} onChange={(e)=>{SetId(e.target.value)}} />
          </div>

          <div className="mb-3">
            <label htmlFor="estado" className="form-label">Estado:</label>
            <select className="form-select" id="estado" name="estado" required value={eva_estado} onChange={(e)=>{SetEstado(e.target.value)}}>
              <option value="En ejecucion">En ejecución</option>
              <option value="Terminado">Terminado</option>
              <option value="Suspendido">Suspendido</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="puntaje" className="form-label">Puntaje:</label>
            <input type="number" id="eva_puntaje" name="puntaje" min="0" max="100" required value={eva_puntaje} onChange={(e)=>{SetPuntaje(e.target.value)}} />
          </div>

          <div className="mb-3">
            <label htmlFor="resultado" className="form-label">Resultado:</label>
            <input type="text" className="form-control" id="eva_resultado" name="cedula" required value={eva_resultado} onChange={(e)=>{SetResultado(e.target.value)}} />
          </div>

          <div className="mb-3">
            <label htmlFor="id_labor" className="form-label">ID de la labor:</label>
            <input type="text" className="form-control" id="lab_id" name="id_labor" required value={lab_id} onChange={(e)=>{SetLabId(e.target.value)}} />
          </div>

          <div className="mb-3">
            <label htmlFor="id_periodo" className="form-label">ID del periodo:</label>
            <input type="text" className="form-control" id="per_id" name="id_periodo" required value={per_id} onChange={(e)=>{SetPerId(e.target.value)}} />
          </div>

          <div className="mb-3">
            <label htmlFor="id_profesor" className="form-label">ID del profesor:</label>
            <input type="text" className="form-control" id="usr_id" name="id_profesor" required value={usr_id} onChange={(e)=>{SetUsrId(e.target.value)}} />
          </div>

          <div className="mb-3">
            <label htmlFor="id_rol" className="form-label">ID del rol:</label>
            <input type="text" className="form-control" id="rol_id" name="id_rol" required value={rol_id} onChange={(e)=>{SetRolId(e.target.value)}} />
          </div>

          <div className="text-center">
            <button onClick={agregarEvaluacion} type="submit" className="btn btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    )
}

export default AgregarEvaluacion