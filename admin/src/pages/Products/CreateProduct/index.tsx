import {
  Box,
  Button,
  CardHeader,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material'
import { CategoriesFetch } from '../../../fetches/categories'
import { CardContent, CardContentButtons, CardContentRow } from './styles'
import { useState } from 'react'
import api from '../../../services/api'
import { toast } from 'react-hot-toast'

export function CreateProduct() {
  const { data } = CategoriesFetch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [idCategory, setIdcategory] = useState('')

  function handleSave() {
    const body = {
      name,
      description,
      price,
      idCategory,
    }

    api
      .post('/api/produto', body)
      .then(() => {
        console.log('Produto cadastrado!')
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  function handleClear() {
    setName('')
    setIdcategory('')
    setPrice('')
    setDescription('')
  }

  return (
    <Box>
      <CardHeader
        sx={{ paddingLeft: '0px' }}
        title="Cadastrar Produto"
        subheader="Cadastro de um novo produto."
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

          <TextField
            fullWidth
            label="Descrição"
            variant="outlined"
            size="small"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </CardContentRow>

        <CardContentRow>
          <TextField
            fullWidth
            label="Preço"
            variant="outlined"
            size="small"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <FormControl fullWidth size="small">
            <InputLabel>Categoria</InputLabel>
            <Select
              value={idCategory}
              label="Categoria"
              onChange={(e) => setIdcategory(e.target.value)}
            >
              {data &&
                data.map((category) => (
                  <MenuItem key={category.id} value={category.id}>
                    {category.nome}
                  </MenuItem>
                ))}
            </Select>
          </FormControl>
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
