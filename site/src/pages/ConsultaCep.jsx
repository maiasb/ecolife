import { useState } from 'react'
import { Button, Input } from '@mui/material'
import '../../src/styles/consultaCep.css'
import { api } from '../services/api'

export function ConsultaCep() {
  const [fetchResponse, setFetchResponse] = useState('')

  function consultarCep() {
    api
      .get(`/api/messages/`)
      .then((response) => console.log(response.data))
      .then((response) => setFetchResponse(response))
      .catch((err) => console.error(err))
  }

  console.log(fetchResponse)

  return (
    <div className="App">
      <h1>Teste</h1>
      <div className="card">
        <Input placeholder="Digite o teste" />
        <Button variant="contained" onClick={consultarCep}>
          Consultar
        </Button>
      </div>
      <div className="response"></div>
    </div>
  )
}
