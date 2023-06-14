import React,{useEffect,useState} from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'

function ListaUsuarios(){

    const[datausuarios,setdatausuario]=useState([])
    axios.defaults.baseURL='http://localhost:5000'
    useEffect(()=>{
        axios.post('/api/obtenerusuario').then(res=>{
            console.log(res.data)
            setdatausuario(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    //Mapear lista en objeto usuario
    const listaUsuarios=datausuarios.map(usuario=>{
        return(
            <div>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })

    return(
        <div>
            <h2>Listar usuarios</h2>
            {listaUsuarios}
        </div>
    )
}

export default ListaUsuarios