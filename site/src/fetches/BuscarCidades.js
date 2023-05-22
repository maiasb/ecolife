import useSWR from 'swr'
import { api } from '../services/api'

export function BuscarCidades(uf) {
  const { data } = useSWR(uf && `uf_${uf}`, async () => {
    const { data: results } = await api.get(`/api/cidades/${uf}`)
    return results
  })
  console.log(data)
  return data
}
