import React,{useEffect,useState} from 'react'
import UsuarioIndividual from './UsuarioIndividual'
import axios from 'axios'
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

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
            <div key={usuario.usr_id}>
                <UsuarioIndividual usuario={usuario}/>
            </div>
        )
    })

    return(
        <div>
            <div><VistaCoordinador /></div>
            <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
                <h2 style={{ color: '#3f51b5', fontWeight: '600', marginBottom: '20px' }}>Lista de Usuarios</h2>
                <div className="users-list">
                    {listaUsuarios}
                </div>
            </div>
        </div>
    )
}

export default ListaUsuarios