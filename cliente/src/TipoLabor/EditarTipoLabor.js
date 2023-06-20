import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditarTipoLabor() {
  const params = useParams();

  const[tl_codigo,SetCodigo]=useState('')
  const[tl_descripcion,SetDescripcion]=useState('')

  axios.defaults.baseURL = 'http://localhost:5000';
  useEffect(() => {
    if (params.tl_id) {
      axios
        .post('/api/obtenertipolabor', { tl_id: params.tl_id })
        .then((res) => {
          const datatipolabor = res.data[0];
          console.log(datatipolabor);
          SetCodigo(datatipolabor.tl_codigo);
          SetDescripcion(datatipolabor.tl_descripcion);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params.tl_id]);


  function editarTipoLabor(event) {
    const actualizartipolabor={
      tl_id: params.tl_id,
      tl_codigo,
      tl_descripcion
    }

    axios.post("/api/actualizartipolabor",actualizartipolabor)
    .then(res=>{
      console.log(res.data)
      alert(res.data)
    })
    .then(err=>{console.log(err)})
  }


  return (
    <div className="container">
      <h1 className="text-center">Formulario de Actualizacion</h1>

      <form>
        <div className="mb-3">
            <label htmlFor="lab_id" className="form-label">Codigo:</label>
            <input type="text" className="form-control" id="tl_codigo" name="tl_codigo" required value={tl_codigo} onChange={(e)=>{SetCodigo(e.target.value)}}/>
        </div>

        <div className="mb-3">
            <label htmlFor="estudio" className="form-label">Descripcion:</label>
            <select className="form-select" id="tl_descripcion" name="tl_descripcion" required value={tl_descripcion} onChange={(e)=>{SetDescripcion(e.target.value)}}>
              <option value="">Seleccione</option>
              <option value="Docencia">Docencia</option>
              <option value="Trabajos Docencia">Trabajos Docencia</option>
              <option value="Proyectos Investigacion">Proyectos Investigacion</option>
              <option value="Trabajos de Investiagación">Trabajos de Investiagación</option>
              <option value="Administración">Administración</option>
              <option value="Asesoria">Asesoria</option>
              <option value="Servicios">Servicios</option>
              <option value="Extensión">Extensión</option>
              <option value="Capacitación">Capacitación</option>
              <option value="Otros Servicios">Otros Servicios</option>
            </select>
          </div>

          <div className="text-center">
            <button onClick={editarTipoLabor} type="submit" className="btn btn-primary">Actualizar</button>
          </div>
      </form>
    </div>
  );
}

export default EditarTipoLabor;
