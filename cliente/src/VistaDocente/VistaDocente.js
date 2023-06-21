import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import "./components/TableStyle.css"
import "../App.css";
import FilaTabla from './FilaTabla';

function VistaDocente() {
    const params = useParams();

    const [evaluaciones, setEvaluaciones] = useState([]);
    const [labores, setLabores] = useState([]);
    const [periodos, setPeriodos] = useState([]);
    const [tiposLabor, setTiposLabor] = useState([]);
  
    axios.defaults.baseURL = 'http://localhost:5000';

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
        <div className="app">
            <table className="first-table">
                <tbody>
                <tr>
                    <td className="recta">
                    INFORME Y EVALUACION DE ACTIVIDADES DE LABOR DOCENTE -
                    DEPARTAMENTO DE SISTEMAS
                    </td>
                </tr>
                <tr>
                    <td className="recta">
                    Facultad de Ingenieria Electronica y Telecomunicaciones -
                    Universidad del Cauca
                    </td>
                </tr>
                </tbody>
            </table>
            <table className="first-table">
                <tbody>
                <tr>
                    <td className="parte-center" rowSpan={3}>
                    <p>
                        Para cada uno de los items presentados a continuacion:<br></br>
                        En la columna "Estado" debe ir Terminado o en ejecucion, segun
                        corresponda.<br></br>
                        Especifique los resultados en las celdas de la columna K
                        <br></br>
                        La evaluacion de la misma en una escala de 1 - 100, en las
                        celdas de la columna L <br></br>
                        Si lo desea tambien hay una seccion de sugerencias y
                        recomendaciones al final de esta tabla.
                    </p>
                    </td>
                </tr>
                <tr>
                    <td className="parte">Nombre</td>
                    <td className="parte">{usr_nombre}</td>
                </tr>
                <tr>
                    <td className="parte">Identificacion (Docente)</td>
                    <td className="parte">{params.usr_id}</td>
                </tr>
                </tbody>
            </table>
          <table className="second-table">
            <tbody>
              <tr>
                <th className="title-second-table">N</th>
                <th className="title-second-table">Nombre de Labor</th>
                <th className="title-second-table">Tipo de Labor</th>
                <th className="title-second-table">Horas</th>
                <th className="title-second-table">Descripción</th>
                <th className="title-second-table">Fecha Inicio</th>
                <th className="title-second-table">Fecha Fin</th>
                <th className="title-second-table">Estado</th>
                <th className="title-second-table">Resultados</th>
                <th className="title-second-table">Evaluación</th>
              </tr>
                {evaluaciones.map((evaluacion, index) => (
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