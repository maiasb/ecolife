import useBreakpoint from '../../hooks/useBreakpoint'
import {
  Actions,
  Container,
  DivLogoTopBar,
  HeroContent,
  HeroContentDescription,
  HeroDescription,
  HeroImage,
  Navigation,
  useStyles,
} from './styles'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Button, IconButton, Link, Typography } from '@mui/material'
import ecoLifelogoHeroDesktop from '../../assets/icons/big/ecoLifeHeroLogoDesktop.svg'
import ecoLifelogoHeroMobile from '../../assets/icons/small/ecolifeHeroLogoMobile.svg'
import ecolifeLogo from '../../assets/icons/small/ecolifeLogo.svg'
import MenuIcon from '@mui/icons-material/Menu'

export function Hero() {
  const { isOnBreakpoint: isTableOrLess } = useBreakpoint(1023)
  const classes = useStyles()
  return (
    <Container id="home">
      <div className={classes.topBar}>
        {isTableOrLess && (
          <IconButton sx={{ marginLeft: '20px' }}>
            <MenuIcon />
          </IconButton>
        )}
        <IconButton href="#home">
          <DivLogoTopBar>
            {' '}
            <img src={ecolifeLogo} alt="ecolife" />{' '}
          </DivLogoTopBar>
        </IconButton>
        {!isTableOrLess && (
          <Navigation>
            <Link href="#products" underline="hover">
              Produtos
            </Link>
            <Link href="#categories" underline="hover">
              Categorias
            </Link>
            <Link href="#" underline="hover">
              Sobre
            </Link>
            <Link href="#footer" underline="hover">
              Contate-nos
            </Link>
          </Navigation>
        )}
        <Actions>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>
          <IconButton>
            <AccountCircleIcon />
          </IconButton>
        </Actions>
      </div>
      <HeroContent>
        <HeroDescription>
          <HeroContentDescription>
            <Typography>Ofertas exclusivas de coleção de móveis</Typography>
            {isTableOrLess && <img src={ecoLifelogoHeroMobile} alt="ecolife" />}
            <Typography>
              Explorar diferentes categorias. Encontre as melhores ofertas.
            </Typography>
            <Button variant="contained">Comprar Agora</Button>
          </HeroContentDescription>
        </HeroDescription>
        {!isTableOrLess && (
          <HeroImage>
            <img src={ecoLifelogoHeroDesktop} alt="ecolife" />
          </HeroImage>
        )}
      </HeroContent>
    </Container>
  )
}
