import { TbAlignLeft } from 'react-icons/tb'
import { Categories } from '../../../../Categories'

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
]

export default pages
