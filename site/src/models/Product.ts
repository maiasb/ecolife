export interface Product {
  id: number
  nome: string
  descricao: string
  preco: number
  categoria_id: number
  created_at: string
  updated_at?: string
  deleted_at?: string
}
