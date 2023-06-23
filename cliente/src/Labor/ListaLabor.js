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
        <div><VistaCoordinador /></div>
            <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
                <h2 style={{ color: '#3f51b5', fontWeight: '600', marginBottom: '20px' }}>Lista de Labores</h2>
                <div className="labors-list">
                    {listaLabores}
                </div>
            </div>
        </div>
    )
}

export default ListaLabor