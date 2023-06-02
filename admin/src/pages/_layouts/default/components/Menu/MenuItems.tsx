import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

import { Box, Collapse, List, ListItem, ListItemIcon } from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { DividerMenu, TextTitle, useStyles } from './styles'
import pages from './pages'
import { useItemManageMenuSelected } from '../../../../../store/manageMenuSelected'

interface SubPageItems {
  title: string
  href: string
  showMenu: boolean
}

interface PageItems {
  id: number
  title: string
  // eslint-disable-next-line no-undef
  icon?: JSX.Element
  subModules: SubPageItems[]
}

function MenuItems() {
  const itemMenuManageSelected = useItemManageMenuSelected(
    (state) => state.itemMenuSelected,
  )
  const setItemMenuManageSelected = useItemManageMenuSelected(
    (state) => state.setItemMenuSelected,
  )

  const forceOpenMenuSelectedById = useItemManageMenuSelected(
    (state) => state.forceOpenMenuSelectedById,
  )

  const clearItemSelected = useItemManageMenuSelected(
    (state) => state.clearItemMenuSelected,
  )

  const [pagesItem, setPagesItem] = useState<PageItems[]>([])

  const location = useLocation()

  const classes = useStyles()

  useEffect(() => {
    const pagesFiltered = pages.map((item: PageItems) => ({
      ...item,
      subModules: item.subModules.filter(
        (subItem: SubPageItems) => subItem.showMenu,
      ),
    }))

    const page = pagesFiltered.find((item) => {
      return item.subModules.find((sub) => sub.href === location.pathname)
    })

    if (page && Object.keys(itemMenuManageSelected).length === 0) {
      forceOpenMenuSelectedById(page.id)
    }

    setPagesItem(pagesFiltered)
  }, [forceOpenMenuSelectedById, itemMenuManageSelected, location.pathname])

  const handleClick = (id: number) => {
    setItemMenuManageSelected(id)
  }

  return (
    <div className={classes.wrapper}>
      <List>
        {pagesItem.map((item) => (
          <Box key={item.id}>
            {item.subModules.length > 0 && (
              <>
                <ListItem onClick={() => handleClick(item.id)}>
                  <ListItemIcon
                    className={classes.icon}
                    style={{ minWidth: 64 }}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <TextTitle>{item.title}</TextTitle>
                  {itemMenuManageSelected[item.id] ? (
                    <ExpandLess />
                  ) : (
                    <ExpandMore />
                  )}
                </ListItem>
                <Collapse
                  in={itemMenuManageSelected[item.id]}
                  timeout="auto"
                  unmountOnExit
                >
                  {item.subModules.map((subItem) => (
                    <Box key={subItem.title}>
                      <ListItem className={classes.nested} disableGutters>
                        <NavLink
                          style={{ flexGrow: 1, fontSize: 14, paddingLeft: 38 }}
                          className={({ isActive }) => {
                            const linkClasses = [classes.button]
                            if (isActive) linkClasses.push(classes.active)
                            return linkClasses.join(' ')
                          }}
                          to={subItem.href}
                          onClick={() => clearItemSelected(item.id)}
                        >
                          {subItem.title}
                        </NavLink>
                      </ListItem>
                    </Box>
                  ))}
                </Collapse>
                <DividerMenu />
              </>
            )}
          </Box>
        ))}
      </List>
    </div>
  )
}

export default MenuItems
