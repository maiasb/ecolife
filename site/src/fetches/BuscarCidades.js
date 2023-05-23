import useSWR from 'swr'
import { api } from '../services/api'

export function BuscarEstados() {
  const { data } = useSWR('estados', async () => {
    const result = await api.get(`/api/estados/`)
    return { estados: result.data }
  })
  return { data }
}
