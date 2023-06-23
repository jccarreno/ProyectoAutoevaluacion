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
      <div>
      <div><VistaCoordinador /></div>
      <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
        <h1 className="text-center mb-5" style={{ color: '#3f51b5' }}>REGISTRAR EVALUACION</h1>
        <form>
          <div className="mb-4">
            <label htmlFor="eva_id" className="form-label" style={{ fontWeight: '600' }}>ID:</label>
            <input type="text" className="form-control" id="eva_id" name="eva_id" required value={eva_id} onChange={(e)=>{SetId(e.target.value)}} />
          </div>

          <div className="mb-4">
            <label htmlFor="estado" className="form-label" style={{ fontWeight: '600' }}>Estado:</label>
            <select className="form-select" id="estado" name="estado" required value={eva_estado} onChange={(e)=>{SetEstado(e.target.value)}}>
              <option value="En ejecucion">En ejecución</option>
              <option value="Terminado">Terminado</option>
              <option value="Suspendido">Suspendido</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="eva_puntaje" className="form-label" style={{ fontWeight: '600' }}>Puntaje:</label>
            <input type="number" id="eva_puntaje" name="eva_puntaje" min="0" max="100" required value={eva_puntaje} onChange={(e)=>{SetPuntaje(e.target.value)}} />
          </div>

          <div className="mb-4">
            <label htmlFor="eva_resultado" className="form-label" style={{ fontWeight: '600' }}>Resultado:</label>
            <input type="text" className="form-control" id="eva_resultado" name="eva_resultado" required value={eva_resultado} onChange={(e)=>{SetResultado(e.target.value)}} />
          </div>

          <div className="mb-4">
            <label htmlFor="lab_id" className="form-label" style={{ fontWeight: '600' }}>ID de la labor:</label>
            <input type="text" className="form-control" id="lab_id" name="lab_id" required value={lab_id} onChange={(e)=>{SetLabId(e.target.value)}} />
          </div>

          <div className="mb-4">
            <label htmlFor="per_id" className="form-label" style={{ fontWeight: '600' }}>ID del periodo:</label>
            <input type="text" className="form-control" id="per_id" name="per_id" required value={per_id} onChange={(e)=>{SetPerId(e.target.value)}} />
          </div>

          <div className="mb-4">
            <label htmlFor="usr_id" className="form-label" style={{ fontWeight: '600' }}>ID del profesor:</label>
            <input type="text" className="form-control" id="usr_id" name="usr_id" required value={usr_id} onChange={(e)=>{SetUsrId(e.target.value)}} />
          </div>

          <div className="mb-4">
            <label htmlFor="rol_id" className="form-label" style={{ fontWeight: '600' }}>ID del rol:</label>
            <input type="text" className="form-control" id="rol_id" name="rol_id" required value={rol_id} onChange={(e)=>{SetRolId(e.target.value)}} />
          </div>

          <div className="text-center">
            <button onClick={agregarEvaluacion} type="submit" className="btn btn-primary" style={{ backgroundColor: '#3f51b5', border: 'none' }}>Agregar</button>
          </div>
        </form>
      </div>

      </div>
    )
}

export default AgregarEvaluacion