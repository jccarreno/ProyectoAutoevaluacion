import React,{useEffect,useState} from 'react'
import TipoLaborIndividual from './TipoLaborIndividual'
import axios from 'axios'

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
            <h2>Listar tipo labores</h2>
            {listatipoLabores}
        </div>
    )
}

export default ListaTipoLabor