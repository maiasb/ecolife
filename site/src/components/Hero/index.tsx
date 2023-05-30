import useBreakpoint from '../../hooks/useBreakpoint'
import {
  Actions,
  DivLogoTopBar,
  Container,
  Navigation,
  TopBar,
  HeroContent,
  HeroImage,
  HeroDescription,
  HeroContentDescription,
} from './styles'
import SearchIcon from '@mui/icons-material/Search'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Button, IconButton, Link, Typography } from '@mui/material'
import ecoLifelogoHeroDesktop from '../../assets/icons/big/ecoLifeHeroLogoDesktop.svg'
import ecoLifelogoHeroMobile from '../../assets/icons/small/ecolifeHeroLogoMobile.svg'

export function Hero() {
  const { isOnBreakpoint: isTableOrLess } = useBreakpoint(1023)
  return (
    <Container>
      <TopBar>
        {isTableOrLess && <h1>Menu</h1>}
        <DivLogoTopBar>Imagem</DivLogoTopBar>
        {!isTableOrLess && (
          <Navigation>
            <Link href="#" underline="hover">
              Home
            </Link>
            <Link href="#" underline="hover">
              Produtos
            </Link>
            <Link href="#" underline="hover">
              Categorias
            </Link>
            <Link href="#" underline="hover">
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
      </TopBar>
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
