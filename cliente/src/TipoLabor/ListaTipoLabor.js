import React,{useEffect,useState} from 'react'
import TipoLaborIndividual from './TipoLaborIndividual'
import axios from 'axios'
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

function ListaTipoLabor(){

    const[datatipolabor,setdatatipolabor]=useState([])
    axios.defaults.baseURL='http://localhost:5000'
    useEffect(()=>{
        axios.post('/api/obtenertipolabor').then(res=>{
            console.log(res.data)
            setdatatipolabor(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Mapear lista en objeto usuario
    const listatipoLabores=datatipolabor.map(tipolabor=>{
        return(
            <div key={tipolabor.tl_id}>
                <TipoLaborIndividual tipolabor={tipolabor}/>
            </div>
        )
    })

    return(
        <div>
        <div><VistaCoordinador /></div>
        <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
            <h2 style={{ color: '#3f51b5', fontWeight: '600', marginBottom: '20px' }}>Listar Tipos de Labores</h2>
            <div className="tipo-labores-list">
                {listatipoLabores}
            </div>
        </div>

        </div>
    )
}

export default ListaTipoLabor