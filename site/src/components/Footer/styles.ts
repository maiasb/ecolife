import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-row: 1;
  padding: 30px 150px;
  background: #9ba657;
  gap: 50px;

  @media (max-width: 1023px) {
    padding: 10px 15px;
  }

  a,
  p {
    color: #f3f6f5;
  }

  a:hover {
    color: #f3f6f5;
    text-decoration: underline;
  }
`
export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: row;
  grid-row: 1;
  gap: 50px;
  justify-content: space-between;

  @media (max-width: 1023px) {
    padding: 10px 15px;
  }
`
export const DivLogoFooter = styled.div`
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ImgLogo = styled.div`
  gap: 50px;
`
export const Social = styled.div`
  height: 36px;
  display: flex;
  color: #f3f6f5;
  fill: #f3f6f5;
  stroke: #f3f6f5;
`
export const MinhaConta = styled.div`
  gap: 50px;
  display: flex;
  flex-direction: column;
  color: #f3f6f5;
`
export const Links = styled.div`
  height: 36px;
  color: #f3f6f5;
  display: flex;
  flex-direction: column;
`
