import { TbAlignLeft } from 'react-icons/tb'
import { Categories } from '../../../../Categories'
import { Products } from '../../../../Products'

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
    ],
  },
]

export default pages
