import { Box, Button, CardContent, CardHeader, TextField } from '@mui/material'
import { CardContentButtons, CardContentRow } from './styles'
import { useState } from 'react'
import api from '../../../services/api'
import { toast } from 'react-hot-toast'

export function CreateCategory() {
  const [name, setName] = useState('')

  function handleSave() {
    const body = {
      name,
    }

    api
      .post('/api/categoria', body)
      .then(() => {
        toast.success('categoria cadastrada!')
        handleClear()
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  function handleClear() {
    setName('')
  }

  return (
    <Box>
      <CardHeader
        sx={{ paddingLeft: '0px' }}
        title="Criar Categoria"
        subheader="Criação de nova categoria."
      />

      <CardContent>
        <CardContentRow>
          <TextField
            fullWidth
            label="Nome"
            variant="outlined"
            size="small"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </CardContentRow>
        <CardContentButtons>
          <Button variant="contained" color="error" onClick={handleClear}>
            Limpar
          </Button>
          <Button variant="contained" onClick={handleSave}>
            Enviar
          </Button>
        </CardContentButtons>
      </CardContent>
    </Box>
  )
}
