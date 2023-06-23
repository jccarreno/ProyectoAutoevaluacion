import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EvaluacionIndividual from './EvaluacionIndividual';
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

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
    <div><VistaCoordinador /></div>
    <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
      <h1 className="text-center mb-5" style={{ color: '#3f51b5' }}>LISTA DE EVALUACIONES</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Buscar por periodo"
        value={filtroPerId}
        onChange={(e) => setFiltroPerId(e.target.value)}
      />
      {listaEvaluaciones}
    </div>

    </div>
  );
}

export default ListaEvaluacion;
