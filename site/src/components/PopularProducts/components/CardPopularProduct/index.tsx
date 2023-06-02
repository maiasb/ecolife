import { Box, Typography } from '@mui/material'
import { CardProduct } from './styles'

interface CardPopularProductProps {
  name: string
  description: string
  price: number
}

export function CardPopularProduct({
  name,
  price,
  description,
}: CardPopularProductProps) {
  return (
    <CardProduct>
      <h1>Imagem</h1>
      <Box>
        <Typography>{name}</Typography>
        <Typography>{description}</Typography>
        <Typography>{price}</Typography>
      </Box>
    </CardProduct>
  )
}
