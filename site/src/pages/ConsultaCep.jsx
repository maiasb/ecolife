import { useState } from 'react'
import {Button, Input, InputLabel} from '@mui/material'
import '../../src/styles/consultaCep.css'

export function ConsultaCep() {
  const [cep, setCep] = useState('')
  const [cepResponse, setCepResponse] = useState({});

  function consultarCep() {
    if(cep.length !== 8) {
      return;
    }

    const options = {method: 'GET'};

    fetch(`http://viacep.com.br/ws/${cep}/json/`, options)
      .then(response => response.json())
      .then(response => setCepResponse(response))
      .catch(err => console.error(err));
  }

  return (
    <div className="App">
      <h1>Consulta Cep</h1>
      <div className="card">
        <Input placeholder='Digite o cep' onChange={(e) => {setCep(e.target.value)}}></Input>
        <Button variant='contained' onClick={consultarCep}>Consultar</Button>
      </div>
      <div className='response'>
        {cepResponse.cep && (
          <>
          <InputLabel>{'Bairro: ' + cepResponse.bairro}</InputLabel>
          <InputLabel>{'Complemento: ' + cepResponse.complemento}</InputLabel>
          <InputLabel>{'DDD: ' + cepResponse.ddd}</InputLabel>
          <InputLabel>{'Gia: ' + cepResponse.gia}</InputLabel>
          <InputLabel>{'IBGE: ' + cepResponse.ibge}</InputLabel>
          <InputLabel>{'Localidade: ' + cepResponse.localidade}</InputLabel>
          <InputLabel>{'Logradouro: ' + cepResponse.logradouro}</InputLabel>
          <InputLabel>{'Siafi: ' + cepResponse.siafi}</InputLabel>
          <InputLabel>{'UF: ' + cepResponse.uf}</InputLabel>
          </>
        )}
      </div>
    </div>
  )
}
