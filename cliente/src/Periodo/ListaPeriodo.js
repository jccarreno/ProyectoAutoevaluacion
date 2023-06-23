import React,{useEffect,useState} from 'react'
import PeriodoIndividual from './PeriodoIndividual'
import axios from 'axios'
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

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
        <div><VistaCoordinador /></div>
        <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
            <h1 className="text-center mb-5" style={{ color: '#3f51b5' }}>LISTA DE PERIODOS</h1>
            {listaPeriodos}
        </div>

        </div>
    )
}

export default ListaPeriodo