import { makeStyles } from '@mui/styles'
import { Container } from './styles'
import MenuItems from './MenuItems'

const useStyles = makeStyles(() => ({
  drawer: {
    width: 280,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}))

interface MenuProps {
  open: boolean
  variant: 'persistent' | 'temporary'
  onClose(): void
}

export function Menu({ open, variant, onClose }: MenuProps) {
  const classes = useStyles()
  return (
    <Container
      anchor="left"
      onClose={onClose}
      open={open}
      variant={variant}
      classes={{ paper: classes.drawer }}
    >
      <div className={classes.root}>
        <MenuItems />
      </div>
    </Container>
  )
}
