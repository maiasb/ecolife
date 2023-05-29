import useBreakpoint from "../../hooks/useBreakpoint";
import { Actions, DivLogoTopBar, Container, Navigation, TopBar, HeroContent, HeroContentSection, HeroContentDescription } from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Button, IconButton, Link, Typography } from "@mui/material";
import ecoLifelogoHero from '../../assets/icons/big/ecoLifeHeroLogo.svg'

export function Hero() {
  const {isOnBreakpoint: isTableOrLess} = useBreakpoint(1023);
  return (
    <Container>
      <TopBar>
      {
          isTableOrLess && (<h1>Menu</h1>)
        }
        <DivLogoTopBar>Imagem</DivLogoTopBar>
        {
          !isTableOrLess && (<Navigation>
            <Link href="#" underline="hover" >Home</Link>
            <Link href="#" underline="hover" >Produtos</Link>
            <Link href="#" underline="hover" >Categorias</Link>
            <Link href="#" underline="hover" >Contate-nos</Link>
          </Navigation>)
        }
        <Actions>
          <IconButton>
            <SearchIcon/>
          </IconButton>
          <IconButton>
            <ShoppingCartIcon/>
          </IconButton>
          <IconButton>
            <AccountCircleIcon/>
          </IconButton>
        </Actions>
      </TopBar>
      <HeroContent>
        <HeroContentDescription>
          <Typography>Ofertas exclusivas de coleção de móveis</Typography>
          <Typography>Explorar diferentes categorias. Encontre as melhores ofertas.</Typography>
          <Button variant="contained">Comprar Agora</Button>
        </HeroContentDescription>
        <HeroContentSection>
          <img src={ecoLifelogoHero}/>
        </HeroContentSection>
      </HeroContent>
    </Container>
  )
}
