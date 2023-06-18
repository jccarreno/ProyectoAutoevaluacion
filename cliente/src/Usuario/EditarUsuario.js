import React, { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditarUsuario() {
  const params = useParams();


  const[usr_nombre,SetNombre]=useState('')
  const[usr_apellido,SetApellido]=useState('')
  const[usr_genero,SetGenero]=useState('')
  const[usr_estudio,SetEstudio]=useState('')

  axios.defaults.baseURL = 'http://localhost:5000';
  useEffect(() => {
    if (params._id) {
      axios
        .post('/api/obtenerusuario', { _id: params._id })
        .then((res) => {
          const datausuario = res.data[0];
          console.log(datausuario);
          SetNombre(datausuario.usr_nombre);
          SetApellido(datausuario.usr_apellido);
          SetGenero(datausuario.usr_genero);
          SetEstudio(datausuario.usr_estudio);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [params._id]);


  function editarUsuario(event) {
    const actualizarusuario={
      _id: params._id,
      usr_nombre,
      usr_apellido,
      usr_genero,
      usr_estudio
    }

    axios.post("/api/actualizarusuario",actualizarusuario)
    .then(res=>{
      console.log(res.data)
      alert(res.data)
    })
    .then(err=>{console.log(err)})
  }


  return (
    <div className="container">
      <h1 className="text-center">Formulario de Registro</h1>

      <form>
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
          <button onClick={editarUsuario} type="submit" className="btn btn-primary">Guardar</button>
        </div>
      </form>
    </div>
  );
}

export default EditarUsuario;
