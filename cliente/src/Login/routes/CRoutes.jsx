import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import {Formulario} from '../components/Formulario';

function CRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path="/" Component={Formulario} />
            </Routes>
        </BrowserRouter>
    );
}
export default CRoutes;