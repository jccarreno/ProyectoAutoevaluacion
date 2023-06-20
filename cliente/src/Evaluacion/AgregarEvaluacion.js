import React,{useState} from 'react'
import axios from 'axios'

function AgregarEvaluacion(){


    const[eva_id,SetId]=useState('')
    const[eva_estado,SetEstado]=useState('')
    const[eva_puntaje,SetPuntaje]=useState('')
    const[eva_resultado,SetResultado]=useState('')
    const[lab_id,SetLabId]=useState('')
    const[per_id,SetPerId]=useState('')
    const[_id,SetUsrId]=useState('')
    const[rol_id,SetRolId]=useState('')

    function agregarEvaluacion(){
        var evaluacion={
          eva_id,
          eva_estado,
          eva_puntaje,
          eva_resultado,
          lab_id,
          per_id,
          _id,
          rol_id
        }
        console.log(evaluacion)
        axios.defaults.baseURL='http://localhost:5000'

        axios
        .post('/api/agregarevaluacion', evaluacion)
        .then(res => {
            console.log(res.data);
            alert('Evaluacion agregada exitosamente');
        })
        .catch(err => {
            console.log(err);
            alert('Error al agregar la Evaluacion');
        });
    }

    return(
      <div class="container">
        <h1 class="text-center">Formulario de Registro</h1>
        <form>
          <div class="mb-3">
            <label for="id" class="form-label">ID:</label>
            <input type="text" class="form-control" id="lab_id" name="cedula" required value={eva_id} onChange={(e)=>{SetId(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label for="estado" class="form-label">Estado:</label>
            <select class="form-select" id="estado" name="estado" required value={eva_estado} onChange={(e)=>{SetEstado(e.target.value)}}>
              <option value="En ejecucion">En ejecución</option>
              <option value="Terminado">Terminado</option>
              <option value="Suspendido">Suspendido</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="puntaje" class="form-label">Puntaje:</label>
            <input type="number" id="puntaje" name="puntaje" min="0" max="100" required value={eva_puntaje} onChange={(e)=>{SetPuntaje(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label for="resultado" class="form-label">Resultado:</label>
            <input type="text" class="form-control" id="lab_id" name="cedula" required value={eva_resultado} onChange={(e)=>{SetResultado(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label for="id_labor" class="form-label">ID de la labor:</label>
            <input type="text" class="form-control" id="id_labor" name="id_labor" required value={lab_id} onChange={(e)=>{SetLabId(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label for="id_periodo" class="form-label">ID del periodo:</label>
            <input type="text" class="form-control" id="id_periodo" name="id_periodo" required value={per_id} onChange={(e)=>{SetPerId(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label for="id_profesor" class="form-label">ID del profesor:</label>
            <input type="text" class="form-control" id="id_profesor" name="id_profesor" required value={_id} onChange={(e)=>{SetUsrId(e.target.value)}} />
          </div>

          <div class="mb-3">
            <label for="id_rol" class="form-label">ID del rol:</label>
            <input type="text" class="form-control" id="id_rol" name="id_rol" required value={rol_id} onChange={(e)=>{SetRolId(e.target.value)}} />
          </div>

          <div class="text-center">
            <button onClick={agregarEvaluacion} type="submit" class="btn btn-primary">Agregar</button>
          </div>
        </form>
      </div>
    )
}

export default AgregarEvaluacion