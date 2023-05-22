import { Box, Button, MenuItem, Select } from "@mui/material"
import { useState } from "react";
import axios from 'axios';
import useSWR from 'swr';

const ufs = ['AC', 'AL', 'AM', 'AP',
      'BA', 'CE', 'DF', 'ES', 'GO',
      'MA', 'MG', 'MS', 'MT', 'PA',
      'PB', 'PE', 'PI', 'PR', 'RJ',
      'RN', 'RO', 'RR', 'RS', 'SC',
      'SE', 'SP', 'TO'];

export function ConsultarEndereco() {
  const [ufSelected, setUfSelected] = useState('');

  const fetcher = (url) => axios.get(url).then((res) => res.data);
  const { cidadesFetch, error } = useSWR('http://educacao.dadosabertosbr.com/api/cidades/PA', fetcher);

  function consultarEndereco() {

    const options = {method: 'GET'};

    fetch(`http://educacao.dadosabertosbr.com/api/cidades/${ufSelected}`, options)
      .then(response => response.json())
      .then(response => setCidadesResponse(response))
      .catch(err => console.error(err));
  }

  return(
    <div className="App">
      <h1>Consulta Endereço</h1>
      <div className="card">
        <Box>
          <Select size="small" onChange={(e) => setUfSelected(e.target.value)}>
            {
              ufs.map((uf) => (
                <MenuItem key={uf} value={uf}>{uf}</MenuItem>
                ))
            }
          </Select>
          <Button variant='contained' onClick={consultarEndereco}>Consultar</Button>
        </Box>
        <Box>
          <Select>
            {
              cidadesFetch && cidadesFetch.map((cidade) => (
                <MenuItem key={cidade} value={cidade}>{cidade}</MenuItem>
              ))
            }
          </Select>
        </Box>
      </div>
      <div className='response'>

      </div>
    </div>
  )
}
