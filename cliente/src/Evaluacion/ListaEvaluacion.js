import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EvaluacionIndividual from './EvaluacionIndividual';

function ListaEvaluacion() {
  const [dataevaluacion, setdataevaluacion] = useState([]);
  const [filtroPerId, setFiltroPerId] = useState('');

  axios.defaults.baseURL = 'http://localhost:5000';

  useEffect(() => {
    axios
      .post('/api/obtenerevaluacion')
      .then((res) => {
        console.log(res.data);
        setdataevaluacion(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const listaEvaluaciones = dataevaluacion
    .filter((evaluacion) => evaluacion.per_id.includes(filtroPerId))
    .map((evaluacion) => {
      return (
        <div key={evaluacion.eva_id}>
          <EvaluacionIndividual evaluacion={evaluacion} />
        </div>
      );
    });

  return (
    <div>
      <h2>LISTA DE EVALUACIONES</h2>
      <input
        type="text"
        placeholder="Buscar por periodo"
        value={filtroPerId}
        onChange={(e) => setFiltroPerId(e.target.value)}
      />
      {listaEvaluaciones}
    </div>
  );
}

export default ListaEvaluacion;
