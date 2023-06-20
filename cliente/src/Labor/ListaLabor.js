import React,{useEffect,useState} from 'react'
import LaborIndividual from './LaborIndividual'
import axios from 'axios'

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
            <h2>Listar labores</h2>
            {listaLabores}
        </div>
    )
}

export default ListaLabor