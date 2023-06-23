import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./components/TableStyle.css"
import "../App.css";
import FilaTabla from './FilaTabla';
import './VistaDocente.css';

function VistaDocente() {
    const params = useParams();

    const [evaluaciones, setEvaluaciones] = useState([]);
    const [labores, setLabores] = useState([]);
    const [periodos, setPeriodos] = useState([]);
    const [tiposLabor, setTiposLabor] = useState([]);
    const [searchValue, setSearchValue] = useState('');
  
    axios.defaults.baseURL = 'http://localhost:5000';

    const handleSearchChange = (event) => {
      setSearchValue(event.target.value);
    };

    const filteredEvaluaciones = evaluaciones.filter((evaluacion) =>
  evaluacion.per_id.includes(searchValue)
);

    useEffect(() => {
        if (params.usr_id) {
          axios
            .post('/api/obtenerevaluaciondocente', { usr_id: params.usr_id })
            .then((res) => {
                console.log(res.data);
              if (Array.isArray(res.data)) {
                setEvaluaciones(res.data);
                console.log(res.data);
              } else {
                console.error('Data is not an array');
              }
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }, [params.usr_id]);
    
    
      useEffect(() => {
        if (evaluaciones.length > 0) {
          const labIds = evaluaciones.map(eva => eva.lab_id);
          let tempLabores = [];
          labIds.forEach(lab_id => {
            axios
              .post('/api/obtenerlabor', { lab_id: lab_id })
              .then((res) => {
                tempLabores = [...tempLabores, res.data];
                setLabores(tempLabores);
              })
              .catch((error) => {
                console.error(error);
              });
          });
        }
      }, [evaluaciones]);

      useEffect(() => {
        if (evaluaciones.length > 0) {
          const perIds = evaluaciones.map(eva => eva.per_id);
          let tempPeriodos = [];
          perIds.forEach(per_id => {
            axios
              .post('/api/obtenerperiodo', { per_id: per_id })
              .then((res) => {
                tempPeriodos = [...tempPeriodos, res.data];
                setPeriodos(tempPeriodos);
              })
              .catch((error) => {
                console.error(error);
              });
          });
        }
      }, [evaluaciones]);


    const[usr_nombre,SetNombre]=useState('')
    const[usr_apellido,SetApellido]=useState('')
    const[usr_genero,SetGenero]=useState('')
    const[usr_estudio,SetEstudio]=useState('')
  
    axios.defaults.baseURL = 'http://localhost:5000';
    useEffect(() => {
      if (params.usr_id) {
        axios
          .post('/api/obtenerusuario', { usr_id: params.usr_id })
          .then((res) => {
            const datausuario = res.data[0];
            console.log(datausuario);
            SetNombre(datausuario.usr_nombre);
            SetApellido(datausuario.usr_apellido);
            SetGenero(datausuario.usr_genero);
            SetEstudio(datausuario.usr_estudio);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }, [params.usr_id]);

    useEffect(() => {
        if (labores.length > 0) {
          const tlIds = labores.map(lab => lab.tl_id);
          let tempTiposLabor = [];
          tlIds.forEach(tl_id => {
            axios
              .post('/api/obtenertipolabor', { tl_id: tl_id })
              .then((res) => {
                tempTiposLabor = [...tempTiposLabor, res.data];
                setTiposLabor(tempTiposLabor);
              })
              .catch((error) => {
                console.error(error);
              });
          });
        }
      }, [labores]);

    const updateEstado = (evaluacionId, value) => {
        setEvaluaciones(prevEvaluaciones =>
            prevEvaluaciones.map(eva =>
            eva.eva_id === evaluacionId ? { ...eva, eva_estado: value } : eva
            )
        );
        axios
            .post('/api/updateEstado', {eva_id: evaluacionId, eva_estado: value })
            .catch((error) => {
            console.error(error);
            });
    };
    
    const updateResultado = (evaluacionId, value) => {
        setEvaluaciones(prevEvaluaciones =>
            prevEvaluaciones.map(eva =>
            eva.eva_id === evaluacionId ? { ...eva, eva_resultado: value } : eva
            )
        );
        axios
            .post('/api/updateResultado', { eva_id: evaluacionId, eva_resultado: value })
            .catch((error) => {
            console.error(error);
            });
        };
        
    const updatePuntaje = (evaluacionId, value) => {
        setEvaluaciones(prevEvaluaciones =>
            prevEvaluaciones.map(eva =>
            eva.eva_id === evaluacionId ? { ...eva, eva_puntaje: value } : eva
            )
        );
        axios
            .post('/api/updatePuntaje', { eva_id: evaluacionId, eva_puntaje: value })
            .catch((error) => {
            console.error(error);
            });
    };

    return (
      <div className="VistaDocente">

          <div className="info-header">
            <h1>INFORME Y EVALUACION DE ACTIVIDADES DE LABOR DOCENTE - DEPARTAMENTO DE SISTEMAS</h1>
            <p>Facultad de Ingenieria Electronica y Telecomunicaciones - Universidad del Cauca</p>
          </div>
          <input
              type="text"
              value={searchValue}
              onChange={handleSearchChange}
              placeholder="Buscar por ID del periodo"
              className="search-input"
          />

          <div className="instructions">
            <p>Para cada uno de los items presentados a continuacion:</p>
            <ul>
              <li>En la columna "Estado" debe ir Terminado o en ejecucion, segun corresponda.</li>
              <li>Especifique los resultados en las celdas de la columna K.</li>
              <li>La evaluacion de la misma en una escala de 1 - 100, en las celdas de la columna L.</li>
              <li>Si lo desea tambien hay una seccion de sugerencias y recomendaciones al final de esta tabla.</li>
            </ul>
          </div>

          <div className="personal-info">
            <div className="info-item">
              <span className="info-title">Nombre: </span>
              <span className="info-value">{usr_nombre}</span>
            </div>
            <div className="info-item">
              <span className="info-title">Identificacion (Docente): </span>
              <span className="info-value">{params.usr_id}</span>
            </div>
          </div>

          <table className="evaluation-table">
            <thead>
              <tr>
                <th>N</th>
                <th>Nombre de Labor</th>
                <th>Tipo de Labor</th>
                <th>Periodo</th>
                <th>Horas</th>
                <th>Descripción</th>
                <th>Fecha Inicio</th>
                <th>Fecha Fin</th>
                <th>Estado</th>
                <th>Resultados</th>
                <th>Evaluación</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvaluaciones.map((evaluacion, index) => (
                <FilaTabla 
                  key={index}
                  index={index}
                  evaluacion={evaluacion}
                  updateEstado={updateEstado}
                  updateResultado={updateResultado}
                  updatePuntaje={updatePuntaje}
                />
              ))}
            </tbody>
          </table>
        </div>
      );

      
}

export default VistaDocente;