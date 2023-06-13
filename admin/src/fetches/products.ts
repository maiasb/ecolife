import useSWR from 'swr'
import api from '../services/api'
import { Product } from '../models/Product'

export const ProductsFetch = () => {
  const { data } = useSWR<Product[]>(
    'products',
    async (): Promise<Product[]> => {
      const response = await api.get(`/api/produtos/`)
      const products = response.data as Product[]

      return products
    },
  )
  return { data }
}
