import { Formulario } from './components/Formulario'
import { useState } from 'react'

function Login() {
  const [usuario, setUsuario] = useState([])

  return (
    <div className='Login'>
      <Formulario />
    </div>
  )
}

export default Login