import React,{useEffect,useState} from 'react'
import axios from 'axios'
import EvaluacionIndividual from './EvaluacionIndividual'

function ListaEvaluacion(){

    const[dataevaluacion,setdataevaluacion]=useState([])
    axios.defaults.baseURL='http://localhost:5000'
    useEffect(()=>{
        axios.post('/api/obtenerevaluacion').then(res=>{
            console.log(res.data)
            setdataevaluacion(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Mapear lista en objeto usuario
    const listaEvaluaciones=dataevaluacion.map(evaluacion=>{
        return(
            <div key={evaluacion.eva_id}>
                <EvaluacionIndividual evaluacion={evaluacion}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Listar evaluaciones</h2>
            {listaEvaluaciones}
        </div>
    )
}

export default ListaEvaluacion