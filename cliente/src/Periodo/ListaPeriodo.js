import React,{useEffect,useState} from 'react'
import PeriodoIndividual from './PeriodoIndividual'
import axios from 'axios'

function ListaPeriodo(){

    const[dataperiodo,setdataperiodo]=useState([])
    axios.defaults.baseURL='http://localhost:5000'
    useEffect(()=>{
        axios.post('/api/obtenerperiodo').then(res=>{
            console.log(res.data)
            setdataperiodo(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Mapear lista en objeto usuario
    const listaPeriodos=dataperiodo.map(periodo=>{
        return(
            <div key={periodo.per_id}>
                <PeriodoIndividual periodo={periodo}/>
            </div>
        )
    })

    return(
        <div>
            <h2>LISTA DE PERIODOS</h2>
            {listaPeriodos}
        </div>
    )
}

export default ListaPeriodo