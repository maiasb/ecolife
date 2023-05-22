
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import { toast, Toaster } from 'react-hot-toast'
import { Box, Button } from '@mui/material'
import { ConsultaCep } from './pages/ConsultaCep'
import { ConsultarEndereco } from './pages/ConsultarEndereco'
import './home.css'

export function App() {
  const [tipoConsulta, setTipoConsulta] = useState('');
  console.log(tipoConsulta)

  return (
    <Box className="App">
    <Box>
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </Box>
    <Box className='boxHome'>
      <Button variant={tipoConsulta === 'cep' ? 'outlined' : 'contained'} onClick={() => {setTipoConsulta('cep')}}>Consultar CEP</Button>
      <Button variant={tipoConsulta === 'endereco' ? 'outlined' : 'contained'} onClick={() => {setTipoConsulta('endereco')}}>Consultar Endereço</Button>
    </Box>
    <Box className="card">
      {tipoConsulta !== '' && tipoConsulta === 'cep' && (<ConsultaCep/>) || (<ConsultarEndereco/>)}
    </Box>
    <Toaster
      position="top-center"
      reverseOrder={false}
    />
  </Box>
  )
}
