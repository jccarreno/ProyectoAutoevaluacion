import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './VistaDocente.css';

function FilaTabla({ index, evaluacion,updateEstado, updateResultado, updatePuntaje }) {

  const[lab_nombre,SetNombre]=useState('')
  const[lab_horas,SetHoras]=useState('')
  const[tl_id,SetTlId]=useState('')




  useEffect(() => {
    if (evaluacion.lab_id) {
      axios
        .post('/api/obtenerlabor', { lab_id: evaluacion.lab_id })
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
  }, [evaluacion.lab_id]);


  const[tl_codigo,SetCodigo]=useState('')
  const[tl_descripcion,SetDescripcion]=useState('')

  useEffect(() => {
    if (tl_id) {
      axios
        .post('/api/obtenertipolabor', { tl_id: tl_id })
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
  }, [tl_id]);

  const[per_nombre,SetPerNombre]=useState('')
  const[per_fechainicio,SetFechaInicio]=useState('')
  const[per_fechafin,SetFechaFin]=useState('')

  axios.defaults.baseURL = 'http://localhost:5000';

  useEffect(() => {
    if (evaluacion.per_id) {
      axios
        .post('/api/obtenerperiodo', { per_id: evaluacion.per_id })
        .then((res) => {
          const datalabor = res.data[0];
          console.log(datalabor);
          SetPerNombre(datalabor.per_nombre);
          SetFechaInicio(datalabor.per_fechainicio);
          SetFechaFin(datalabor.per_fechafin);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [evaluacion.per_id]);



  return (
    <tr key={index} className="evaluation-table-row">
      <td> {index+1} </td>
      <td className="column-nombrelabor">{lab_nombre}</td>
      <td>{tl_codigo}</td>
      <td>{evaluacion.per_id}</td>
      <td>{lab_horas}</td>
      <td>{tl_descripcion}</td>
      <td>{per_fechainicio}</td>
      <td>{per_fechafin}</td>
      <td>{evaluacion.eva_estado}</td>
      <td>
        <input
          className="input-column-resultado evaluation-input"
          type="text"
          value={evaluacion.eva_resultado}
          readOnly={evaluacion.eva_estado === "Terminado"}
          onChange={(e) => updateResultado(evaluacion.eva_id, e.target.value)}
        />
      </td>
      <td>
        <input
          className="input-column-puntaje evaluation-input"
          type="number"
          value={evaluacion.eva_puntaje}
          min="1" 
          max="100"
          readOnly={evaluacion.eva_estado === "Terminado"}
          onChange={(e) => updatePuntaje(evaluacion.eva_id, e.target.value)}
        />
      </td>
    </tr>
  );
}

export default FilaTabla;
