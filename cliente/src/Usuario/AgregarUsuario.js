import React,{useState} from 'react'
import uniquid from 'uniqid'
import axios from 'axios'

function AgregarUsuarios(){

    const[_id,SetId]=useState('')
    const[usr_nombre,SetNombre]=useState('')
    const[usr_apellido,SetApellido]=useState('')
    const[usr_genero,SetGenero]=useState('')
    const[usr_estudio,SetEstudio]=useState('')

    function agregarUsuarios(){
        var usuario={
            _id,
            usr_nombre,
            usr_apellido,
            usr_genero,
            usr_estudio
        }
        console.log(usuario)
        axios.defaults.baseURL='http://localhost:5000'

        axios
        .post('/api/agregarusuario', usuario)
        .then(res => {
            console.log(res.data);
            alert('Usuario agregado exitosamente');
        })
        .catch(err => {
            console.log(err);
            alert('Error al agregar usuario');
        });
    }

    return(
    <div className="container">
      <h1 className="text-center">Formulario de Registro</h1>

      <form>
        <div className="mb-3">
          <label htmlFor="cedula" className="form-label">Cédula:</label>
          <input type="text" className="form-control" id="cedula" name="cedula" required value={_id} onChange={(e)=>{SetId(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre:</label>
          <input type="text" className="form-control" id="nombre" name="nombre" required value={usr_nombre} onChange={(e)=>{SetNombre(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">Apellido:</label>
          <input type="text" className="form-control" id="apellido" name="apellido" required value={usr_apellido} onChange={(e)=>{SetApellido(e.target.value)}}/>
        </div>

        <div className="mb-3">
          <label htmlFor="genero" className="form-label">Género:</label>
          <select className="form-select" id="genero" name="genero" required value={usr_genero} onChange={(e)=>{SetGenero(e.target.value)}}>
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="estudio" className="form-label">Nivel de Estudio:</label>
          <select className="form-select" id="estudio" name="estudio" required value={usr_estudio} onChange={(e)=>{SetEstudio(e.target.value)}}>
            <option value="">Seleccione</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="tecnico">Tecnico</option>
            <option value="universidad">Universidad</option>
            <option value="especialización">Especialización</option>
            <option value="maestria">Maestria</option>
            <option value="doctorado">Doctorado</option>
          </select>
        </div>

        <div className="text-center">
          <button onClick={agregarUsuarios} type="submit" className="btn btn-primary">Agregar</button>
        </div>
      </form>
    </div>
    )
}

export default AgregarUsuarios