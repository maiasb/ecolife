import { Box, CardHeader } from '@mui/material'

export function CreateProduct() {
  return (
    <Box>
      <CardHeader
        sx={{ paddingLeft: '0px' }}
        title="Cadastrar Produto"
        subheader="Cadastro de um novo produto."
      />
    </Box>
  )
}
