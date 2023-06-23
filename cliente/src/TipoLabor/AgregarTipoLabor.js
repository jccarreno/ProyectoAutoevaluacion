import React,{useState} from 'react'
import axios from 'axios'
import VistaCoordinador from '../VistaCoordinador/VistaCoordinador'

function AgregarTipoLabor(){

    const[tl_id,SetId]=useState('')
    const[tl_codigo,SetCodigo]=useState('')
    const[tl_descripcion,SetDescripcion]=useState('')

    function agregarTipoLabor(){
        var tipolabor={
          tl_id,
          tl_codigo,
          tl_descripcion
        }
        console.log(tipolabor)
        axios.defaults.baseURL='http://localhost:5000'

        axios
        .post('/api/agregartipolabor', tipolabor)
        .then(res => {
            console.log(res.data);
            alert('Tipo Labor agregada exitosamente');
        })
        .catch(err => {
            console.log(err);
            alert('Error al agregar el tipo labor');
        });
    }

    return(
      <div>
      <div><VistaCoordinador /></div>
      <div className="container py-5" style={{ backgroundColor: '#f7f7f7', borderRadius: '15px', boxShadow: '0px 0px 10px #00000030' }}>
  <h1 className="text-center mb-5" style={{ color: '#3f51b5' }}>Agregar Tipo Labor</h1>

  <form>
    <div className="mb-4">
      <label htmlFor="tl_id" className="form-label" style={{ fontWeight: '600' }}>ID:</label>
      <input type="text" className="form-control" id="tl_id" name="tl_id" required value={tl_id} onChange={(e)=>{SetId(e.target.value)}}/>
    </div>

    <div className="mb-4">
      <label htmlFor="tl_codigo" className="form-label" style={{ fontWeight: '600' }}>Codigo:</label>
      <input type="text" className="form-control" id="tl_codigo" name="tl_codigo" required value={tl_codigo} onChange={(e)=>{SetCodigo(e.target.value)}}/>
    </div>

    <div className="mb-4">
      <label htmlFor="tl_descripcion" className="form-label" style={{ fontWeight: '600' }}>Descripcion:</label>
      <select className="form-select" id="tl_descripcion" name="tl_descripcion" required value={tl_descripcion} onChange={(e)=>{SetDescripcion(e.target.value)}}>
        <option value="">Seleccione</option>
        <option value="Docencia">Docencia</option>
        <option value="Trabajos Docencia">Trabajos Docencia</option>
        <option value="Proyectos Investigacion">Proyectos Investigacion</option>
        <option value="Trabajos de Investiagación">Trabajos de Investiagación</option>
        <option value="Administración">Administración</option>
        <option value="Asesoria">Asesoria</option>
        <option value="Servicios">Servicios</option>
        <option value="Extensión">Extensión</option>
        <option value="Capacitación">Capacitación</option>
        <option value="Otros Servicios">Otros Servicios</option>
      </select>
    </div>

    <div className="text-center">
      <button onClick={agregarTipoLabor} type="submit" className="btn btn-primary" style={{ backgroundColor: '#3f51b5', border: 'none' }}>Agregar</button>
    </div>
  </form>
</div>
    </div>
    )
}

export default AgregarTipoLabor