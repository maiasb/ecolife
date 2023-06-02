import { Outlet } from 'react-router-dom'
import { Container, Content } from './styles'
import { Menu } from './components/Menu'
import { useState } from 'react'
import useBreakpoint from '../../../hooks/useBreakpoints'

export function Default() {
  const isDesktop = useBreakpoint(1023)
  const [openSidebar, setOpenSidebar] = useState(false)
  const shouldOpenSidebar = isDesktop ? true : openSidebar

  const handleSidebarClose = () => {
    setOpenSidebar(false)
  }

  return (
    <Container>
      <Menu
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <Content>
        <Outlet />
      </Content>
    </Container>
  )
}
