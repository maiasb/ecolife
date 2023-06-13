import { CardHeader, Typography } from '@mui/material'
import { Card, CardContent, Content, Item, ListHeader } from './styles'
import { CategoriesFetch } from '../../../fetches/categories'

export function Categories() {
  const { data } = CategoriesFetch()

  return (
    <Content>
      <CardHeader
        sx={{ paddingLeft: '0px' }}
        title="Categorias"
        subheader="Listagem de categorias cadastradas."
      />

      <CardContent>
        <ListHeader>
          <Item>
            <Typography sx={{ width: '100px' }} color="gray">
              ID
            </Typography>
            <Typography sx={{ width: '100%' }} color="gray">
              Nome
            </Typography>
            <Typography sx={{ width: '100%' }} color="gray">
              Data de Criação
            </Typography>
          </Item>
        </ListHeader>
        <Card>
          {data &&
            data.map((product) => (
              <Item key={product.id}>
                <Typography sx={{ width: '100px' }}>{product.id}</Typography>
                <Typography sx={{ width: '100%' }}>{product.nome}</Typography>
                <Typography sx={{ width: '100%' }}>
                  {product.created_at}
                </Typography>
              </Item>
            ))}
        </Card>
      </CardContent>
    </Content>
  )
}
