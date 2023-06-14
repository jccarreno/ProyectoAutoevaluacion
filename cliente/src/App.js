import logo from './logo.svg';
import ListaUsuarios from './Usuario/ListaUsuarios';
import AgregarUsuarios from './Usuario/AgregarUsuario';
import EditarUsuarios from './Usuario/EditarUsuario';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="titulo">AUTOEVALUACION DOCENTE</div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
            <a className="navbar-brand" href="/">Inicio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="listarusuarios">Listar Usuarios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="agregarusuario">Agregar Usuarios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="editarusuario">Editar Usuarios</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
      <BrowserRouter>
        <Routes>
          <Route path='/listarusuarios' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuarios/>} exact></Route>
          <Route path='/editarusuario/:usr_id' element={<EditarUsuarios/>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
