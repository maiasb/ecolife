import { Typography } from '@mui/material'
import { ProductsFetch } from '../../fetches/products'
import { Container, Item, PopularProductsContent } from './styles'
import Carousel from 'react-elastic-carousel'
import useBreakpoint from '../../hooks/useBreakpoint'
import { CardPopularProduct } from './components/CardPopularProduct'

const breakPoints = [
  { width: 0, itemsToShow: 1.03 },
  { width: 360, itemsToShow: 1.15 },
  { width: 460, itemsToShow: 1.2 },
  { width: 600, itemsToShow: 1.9 },
  { width: 900, itemsToShow: 2.1 },
  { width: 1024, itemsToShow: 2.4 },
  { width: 1220, itemsToShow: 2.8 },
  { width: 1440, itemsToShow: 3 },
  { width: 1600, itemsToShow: 4 },
]

export function PopularProducts() {
  const { isOnBreakpoint: isTabletSizeOrSmaller } = useBreakpoint(390)

  const { data } = ProductsFetch()

  return (
    <Container id="products">
      <Typography>Produtos Populares</Typography>
      <PopularProductsContent>
        {data?.length ? (
          /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
          /* @ts-ignore */
          <Carousel
            breakPoints={breakPoints}
            pagination={false}
            itemPadding={[0, 30]}
            outerSpacing={isTabletSizeOrSmaller ? 30 : 40}
          >
            {data.map((product) => (
              <Item key={product.id}>
                <CardPopularProduct
                  name={product.nome}
                  price={product.preco}
                  description={product.descricao}
                />
              </Item>
            ))}
          </Carousel>
        ) : (
          <h1>Sem produtos cadastrados</h1>
        )}
      </PopularProductsContent>
    </Container>
  )
}
