import {
  Container,
  ContainerLinks,
  DivLogoFooter,
  ImgLogo,
  Links,
  MinhaConta,
  Social,
} from './styles'
import ecolifeLogo from '../../assets/icons/small/ecolifeLogo.svg'
import { IconButton } from '@mui/material'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

export function Footer() {
  return (
    <Container id="footer">
      <ContainerLinks>
        <DivLogoFooter>
          <ImgLogo>
            <img src={ecolifeLogo} alt={'Logo Ecolife'} />
          </ImgLogo>
          <Social>
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
          </Social>
        </DivLogoFooter>
        <MinhaConta>
          <h2>Minha Conta</h2>
          <Links>
            <a href="#">Entrar </a>
            <a href="#">Registro </a>
            <a href="#">Status do Produto </a>
          </Links>
        </MinhaConta>
        <MinhaConta>
          <h2>Ajuda</h2>
          <Links>
            <a href="#">Envios </a>
            <a href="#">Devoluções </a>
            <a href="#">Dimensionamento </a>
          </Links>
        </MinhaConta>
        <MinhaConta>
          <h2>Comprar</h2>
          <Links>
            <a href="#">Todos os produtos</a>
            <a href="#">Quarto </a>
            <a href="#">Sala de jantar </a>
          </Links>
        </MinhaConta>
        <MinhaConta>
          <h2>Outros</h2>
          <Links>
            <a href="#">Envios e Entregas</a>
            <a href="#">Termos e Condições </a>
            <a href="#">Política de Privacidade </a>
          </Links>
        </MinhaConta>
      </ContainerLinks>
      <p>Copyright ©2023 ECOLIFE. Todos os direitos reservados.</p>
    </Container>
  )
}
