export interface Product {
  id: number
  nome: string
  descricao?: string
  preco: number
  nome_categoria: string
  created_at: string
  updated_at?: string
  deleted_at?: string
}
