import { CardProduct } from './styles'

interface CardPopularProductProps {
  name: string
  price: number
}

export function CardPopularProduct({ name, price }: CardPopularProductProps) {
  return (
    <CardProduct>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </CardProduct>
  )
}
