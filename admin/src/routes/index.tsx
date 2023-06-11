import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Default } from '../pages/_layouts/default'
import pages from '../pages/_layouts/default/components/Menu/pages'
import { useEffect, useState } from 'react'
import { Toaster } from 'react-hot-toast'

interface RoutesItems {
  moduleID: number
  title: string
  href: string
  showMenu: boolean
  // eslint-disable-next-line no-undef
  component: () => JSX.Element
}

export function MyRoutes() {
  const [routesItems, setRoutesItems] = useState<RoutesItems[]>([])

  useEffect(() => {
    const pagesFilterd = pages.reduce((acc: RoutesItems[], current) => {
      return [...acc, ...current.subModules]
    }, [])

    setRoutesItems(pagesFilterd)
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Default />}>
          {routesItems.map((route) => {
            const Element = route.component
            return (
              <Route key={route.href} path={route.href} element={<Element />} />
            )
          })}
        </Route>
      </Routes>
      <Toaster />
    </BrowserRouter>
  )
}
