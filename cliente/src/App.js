import ListaUsuarios from './Usuario/ListaUsuarios';
import AgregarUsuarios from './Usuario/AgregarUsuario';
import EditarUsuario from './Usuario/EditarUsuario';
import AgregarLabor from './Labor/AgregarLabor';
import ListaLabor from './Labor/ListaLabor';
import AgregarTipoLabor from './TipoLabor/AgregarTipoLabor';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import './App.css';
import EditarLabor from './Labor/EditarLabor';
import ListaTipoLabor from './TipoLabor/ListaTipoLabor';
import EditarTipoLabor from './TipoLabor/EditarTipoLabor';
import AgregarPeriodo from './Periodo/AgregarPeriodo';
import ListaPeriodo from './Periodo/ListaPeriodo';
import EditarPeriodo from './Periodo/EditarPeriodo';
import AgregarEvaluacion from './Evaluacion/AgregarEvaluacion';
import EditarEvaluacion from './Evaluacion/EditarEvaluacion';
import ListaEvaluacion from './Evaluacion/ListaEvaluacion';
import VistaDocente from './VistaDocente/VistaDocente';
import BuscarDocente from './VistaDocente/BuscarDocente';
import Login from './Login/Login';
import VistaCoordinador from './VistaCoordinador/VistaCoordinador';

function App() {
  return (
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login/>} exact></Route>
          <Route path='/listarusuarios' element={<ListaUsuarios/>} exact></Route>
          <Route path='/agregarusuario' element={<AgregarUsuarios/>} exact></Route>
          <Route path='/editarusuario/:usr_id' element={<EditarUsuario/>} exact></Route>
          <Route path='/agregarlabor' element={<AgregarLabor/>} exact></Route>
          <Route path='/listarlabor' element={<ListaLabor/>} exact></Route>
          <Route path='/editarlabor/:lab_id' element={<EditarLabor/>} exact></Route>
          <Route path='/agregartipolabor' element={<AgregarTipoLabor/>} exact></Route>
          <Route path='/listartipolabor' element={<ListaTipoLabor/>} exact></Route>
          <Route path='/editartipolabor/:tl_id' element={<EditarTipoLabor/>} exact></Route>
          <Route path='/agregarperiodo' element={<AgregarPeriodo/>} exact></Route>
          <Route path='/listarperiodo' element={<ListaPeriodo/>} exact></Route>
          <Route path='/editarperiodo/:per_id' element={<EditarPeriodo/>} exact></Route>
          <Route path='/agregarevaluacion' element={<AgregarEvaluacion/>} exact></Route>
          <Route path='/listarevaluacion' element={<ListaEvaluacion/>} exact></Route>
          <Route path='/editarevaluacion/:eva_id' element={<EditarEvaluacion/>} exact></Route>
          <Route path='/docente' element={<BuscarDocente/>} exact></Route>
          <Route path='/docente/:usr_id' element={<VistaDocente/>} exact></Route>
          <Route path='/coordinador' element={<VistaCoordinador/>} exact></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
