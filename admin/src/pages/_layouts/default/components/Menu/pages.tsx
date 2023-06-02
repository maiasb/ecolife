import { TbAlignLeft } from 'react-icons/tb'
import { Categories } from '../../../../Categories/CategoriesList'
import { Products } from '../../../../Products/ProductsList'
import { CreateCategory } from '../../../../Categories/CreateCategory'
import { CreateProduct } from '../../../../Products/CreateProduct'

const pages = [
  {
    id: 1,
    title: 'Categorias',
    icon: <TbAlignLeft />,
    subModules: [
      {
        moduleID: 1,
        title: 'Categorias Criadas',
        href: '/categorias',
        component: Categories,
        showMenu: true,
      },
      {
        moduleID: 1,
        title: 'Criar Categorias',
        href: '/criar-categorias',
        component: CreateCategory,
        showMenu: true,
      },
    ],
  },
  {
    id: 2,
    title: 'Produtos',
    icon: <TbAlignLeft />,
    subModules: [
      {
        moduleID: 2,
        title: 'Produtos Criados',
        href: '/produtos',
        component: Products,
        showMenu: true,
      },
      {
        moduleID: 2,
        title: 'Cadastrar Produtos',
        href: '/cadastrar-produtos',
        component: CreateProduct,
        showMenu: true,
      },
    ],
  },
]

export default pages
