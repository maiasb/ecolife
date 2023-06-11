import useSWR from 'swr'
import api from '../services/api'
import { Category } from '../models/Category'

export const CategoriesFetch = () => {
  const { data } = useSWR<Category[]>(
    'categories',
    async (): Promise<Category[]> => {
      const response = await api.get(`/api/categorias`)
      const categories = response.data as Category[]

      return categories
    },
  )
  return { data }
}
