import React, { useEffect,useState } from 'react';
import "../App.css";

import ListaUsuarios from '../Usuario/ListaUsuarios';
import AgregarUsuarios from '../Usuario/AgregarUsuario';
import EditarUsuario from '../Usuario/EditarUsuario';
import AgregarLabor from '../Labor/AgregarLabor';
import ListaLabor from '../Labor/ListaLabor';
import AgregarTipoLabor from '../TipoLabor/AgregarTipoLabor';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import '../App.css';
import EditarLabor from '../Labor/EditarLabor';
import ListaTipoLabor from '../TipoLabor/ListaTipoLabor';
import EditarTipoLabor from '../TipoLabor/EditarTipoLabor';
import AgregarPeriodo from '../Periodo/AgregarPeriodo';
import ListaPeriodo from '../Periodo/ListaPeriodo';
import EditarPeriodo from '../Periodo/EditarPeriodo';
import AgregarEvaluacion from '../Evaluacion/AgregarEvaluacion';
import EditarEvaluacion from '../Evaluacion/EditarEvaluacion';
import ListaEvaluacion from '../Evaluacion/ListaEvaluacion';
import VistaDocente from '../VistaDocente/VistaDocente';
import BuscarDocente from '../VistaDocente/BuscarDocente';
import Login from '../Login/Login';

function VistaCoordinador() {


    return (
        <div className='App'>
        <div className="titulo">GESTION AUTOEVALUACION DOCENTE</div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                  <a className="navbar-brand" href="/coordinador">Inicio</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                      <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="usuariosDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Usuarios</a>
                              <ul className="dropdown-menu" aria-labelledby="usuariosDropdown">
                                  <li><a className="dropdown-item" href="listarusuarios">Listar</a></li>
                                  <li><a className="dropdown-item" href="agregarusuario">Agregar</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="laborDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Labor</a>
                              <ul className="dropdown-menu" aria-labelledby="laborDropdown">
                                  <li><a className="dropdown-item" href="listarlabor">Listar</a></li>
                                  <li><a className="dropdown-item" href="agregarlabor">Agregar</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="tipolaborDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tipo Labor</a>
                              <ul className="dropdown-menu" aria-labelledby="tipolaborDropdown">
                                  <li><a className="dropdown-item" href="listartipolabor">Listar</a></li>
                                  <li><a className="dropdown-item" href="agregartipolabor">Agregar</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="periodoDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Periodo</a>
                              <ul className="dropdown-menu" aria-labelledby="periodoDropdown">
                                  <li><a className="dropdown-item" href="listarperiodo">Listar</a></li>
                                  <li><a className="dropdown-item" href="agregarperiodo">Agregar</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="evaluacionDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">Evaluacion</a>
                              <ul className="dropdown-menu" aria-labelledby="evaluacionDropdown">
                                  <li><a className="dropdown-item" href="listarevaluacion">Listar</a></li>
                                  <li><a className="dropdown-item" href="agregarevaluacion">Agregar</a></li>
                              </ul>
                          </li>
                          <li className="nav-item dropdown">
                              <a className="nav-link dropdown-toggle" href="#" id="VistaDocenteDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">VistaDocente</a>
                              <ul className="dropdown-menu" aria-labelledby="VistaDocenteDropdown">
                                  <li><a className="dropdown-item" href="docente">ver</a></li>
                              </ul>
                          </li>
                      </ul>
                  </div>
              </div>
            </nav>
  
          
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
      );
      
}

export default VistaCoordinador;