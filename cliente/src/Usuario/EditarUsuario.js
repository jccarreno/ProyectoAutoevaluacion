import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function EditarUsuarios() {
  const params = useParams();

  const [usr_nombre, SetNombre] = useState('');
  const [usr_apellido, SetApellido] = useState('');
  const [usr_genero, SetGenero] = useState('');
  const [usr_estudio, SetEstudio] = useState('');

  axios.defaults.baseURL = 'http://localhost:5000';
  useEffect(() => {
    axios.post('/api/obtenerusuario', { usr_id: params.usr_id }).then((res) => {
      console.log(res.data[0]);
      const datausuario = res.data[0];
      if (datausuario) {
        SetNombre(datausuario.usr_nombre);
        SetApellido(datausuario.usr_apellido);
        SetGenero(datausuario.usr_genero);
        SetEstudio(datausuario.usr_estudio);
      }
    });
  }, []);

  function editarUsuario(event) {
    event.preventDefault();
    // Lógica para editar el usuario
  }


  return (
    <div className="container">
      <h1 className="text-center">Editar registro</h1>

      <form onSubmit={editarUsuario}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required
            value={usr_nombre}
            onChange={(e) => {
              SetNombre(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="apellido" className="form-label">
            Apellido:
          </label>
          <input
            type="text"
            className="form-control"
            id="apellido"
            name="apellido"
            required
            value={usr_apellido}
            onChange={(e) => {
              SetApellido(e.target.value);
            }}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="genero" className="form-label">
            Género:
          </label>
          <select
            className="form-select"
            id="genero"
            name="genero"
            required
            value={usr_genero}
            onChange={(e) => {
              SetGenero(e.target.value);
            }}
          >
            <option value="">Seleccione</option>
            <option value="masculino">Masculino</option>
            <option value="femenino">Femenino</option>
            <option value="otro">Otro</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="estudio" className="form-label">
            Nivel de Estudio:
          </label>
          <select
            className="form-select"
            id="estudio"
            name="estudio"
            required
            value={usr_estudio}
            onChange={(e) => {
              SetEstudio(e.target.value);
            }}
          >
            <option value="">Seleccione</option>
            <option value="primaria">Primaria</option>
            <option value="secundaria">Secundaria</option>
            <option value="tecnico">Técnico</option>
            <option value="universidad">Universidad</option>
            <option value="especialización">Especialización</option>
            <option value="maestria">Maestría</option>
            <option value="doctorado">Doctorado</option>
          </select>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditarUsuarios;
