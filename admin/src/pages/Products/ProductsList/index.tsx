import { CardHeader, Typography } from '@mui/material'
import { ProductsFetch } from '../../../fetches/products'
import { Card, CardContent, Content, Item, ListHeader } from './styles'

export function Products() {
  const { data } = ProductsFetch()

  return (
    <Content>
      <CardHeader
        sx={{ paddingLeft: '0px' }}
        title="Produtos"
        subheader="Listagem de produtos cadastrados."
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
              Preço
            </Typography>
            <Typography sx={{ width: '100%' }} color="gray">
              Categoria
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
                <Typography sx={{ width: '100%' }}>{product.preco}</Typography>
                <Typography sx={{ width: '100%' }}>
                  {product.nome_categoria}
                </Typography>
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
