import { FormControl, Input, InputLabel, MenuItem, Select } from '@mui/material'
import '../../src/styles/consultaCep.css'
import { BuscarEstados } from '../fetches/BuscarCidades'

export function ConsultaCep() {
  const { data: estadosResponse } = BuscarEstados()

  return (
    <div className="App">
      <h1>Teste</h1>
      <div className="card">
        <Input placeholder="Digite o teste" />{' '}
        <FormControl fullWidth>
          <InputLabel id="select-estados">Estados</InputLabel>
          <Select
            labelId="select-estados"
            id="select-estados"
            // value={age}
            label="Estados"
            // onChange={handleChange}
          >
            {estadosResponse &&
              estadosResponse.estados.map((estado) => (
                <MenuItem key={estado.nome}>{estado.nome}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
      <div className="response"></div>
    </div>
  )
}
