import { CardHeader, Typography } from '@mui/material'
import { ProductsFetch } from '../../../fetches/products'
import { Card, CardContent, Content, Item } from './styles'

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
        <Card>
          {data &&
            data.map((product) => (
              <Item key={product.id}>
                <Typography sx={{ width: '100px' }}>{product.id}</Typography>
                <Typography sx={{ width: '100%' }}>{product.nome}</Typography>
                <Typography sx={{ width: '100%' }}>{product.preco}</Typography>
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
