import useSWR from 'swr';
import api from '../services/api';
import { Category } from '../models/category';

export const CategoriesFetch = () => {
  const { data } = useSWR<Category[]>(
    'categories',
    async (): Promise<Category[]> => {
      const response = await api.get(`/api/produtos/categorias`);
      const categories = response.data as Category[];

      return categories;
    },
  );
  return { data };
};
