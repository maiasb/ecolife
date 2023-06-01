import { Box, Card, Typography } from '@mui/material'
import { ProductsFetch } from '../../fetches/products'
import { Container, PopularProductsContent } from './styles'

export function PopularProducts() {
  const { data } = ProductsFetch()
  return (
    <Container>
      <Typography>Produtos Populares</Typography>
      <PopularProductsContent>
        {data &&
          data.map((product) => (
            <Card key={product.id}>
              <Box>{product.nome}</Box>
              <Box>{product.preco}</Box>
            </Card>
          ))}
      </PopularProductsContent>
    </Container>
  )
}
