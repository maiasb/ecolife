import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 700px;
  padding: 30px 150px;
  background: #FFF4E7;
  gap: 50px;

  @media (max-width: 1023px) {
    padding: 10px 15px;
  }
`

export const TopBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`
export const DivLogoTopBar = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`

export const HeroContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
`
export const HeroContentDescription = styled.div`
  justify-content: center;
  flex-direction: column;
  align-items: start;
  display: flex;
  height: 100%;
  width: 100%;
  gap: 50px;
`
export const HeroContentSection = styled.div`
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
`

