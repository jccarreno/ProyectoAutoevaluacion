import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditarLabor() {
  const params = useParams();


  const[lab_nombre,SetNombre]=useState('')
  const[lab_horas,SetHoras]=useState('')
  const[tl_id,SetTlId]=useState('')

  axios.defaults.baseURL = 'http://localhost:5000';
  useEffect(() => {
    if (params.lab_id) {
      axios
        .post('/api/obtenerlabor', { lab_id: params.lab_id })
        .then((res) => {
          const datalabor = res.data[0];
          console.log(datalabor);
          SetNombre(datalabor.lab_nombre);
          SetHoras(datalabor.lab_horas);
          SetTlId(datalabor.tl_id);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params.lab_id]);


  function editarLabor(event) {
    const actualizarlabor={
      lab_id: params.lab_id,
      lab_nombre,
      lab_horas,
      tl_id
    }

    axios.post("/api/actualizarlabor",actualizarlabor)
    .then(res=>{
      console.log(res.data)
      alert(res.data)
    })
    .then(err=>{console.log(err)})
  }


  return (
    <div className="container">
      <h1 className="text-center">Formulario de Registro</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="lab_nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="lab_nombre" name="nombre" required value={lab_nombre} onChange={(e)=>{SetNombre(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="lab_horas" className="form-label">Horas:</label>
          <input type="text" className="form-control" id="lab_horas" name="horas" required value={lab_horas} onChange={(e)=>{SetHoras(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="tl_id" className="form-label">Id del Tipo labor:</label>
            <input type="text" className="form-control" id="tl_id" name="tipo" required value={tl_id} onChange={(e)=>{SetTlId(e.target.value)}}/>
        </div>

        <div className="text-center">
          <button onClick={editarLabor} type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </div>
  );
}

export default EditarLabor;
