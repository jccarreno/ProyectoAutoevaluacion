import React,{useEffect,useState} from 'react'
import LaborIndividual from './LaborIndividual'
import axios from 'axios'
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

function ListaLabor(){

    const[datalabor,setdatausuario]=useState([])
    axios.defaults.baseURL='http://localhost:5000'
    useEffect(()=>{
        axios.post('/api/obtenerlabor').then(res=>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Mapear lista en objeto usuario
    const listaLabores=datalabor.map(labor=>{
        return(
            <div key={labor.lab_id}>
                <LaborIndividual labor={labor}/>
            </div>
        )
    })

    return(
        <div>
            <VistaCoordinador />
            <h2>LISTA DE LABORES</h2>
            {listaLabores}
        </div>
    )
}

export default ListaLabor