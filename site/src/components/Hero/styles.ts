import styled from 'styled-components'
import { makeStyles } from '@mui/styles'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  padding: 30px 150px;
  background: #fff4e7;
  gap: 50px;

  @media (max-width: 1023px) {
    padding: 10px 15px;
  }
`
export const DivLogoTopBar = styled.div`
  height: 36px;
  display: flex;
  justify-content: space-between;
`
export const Navigation = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  color: #fff4e7;
  stroke: #fff4e7;
  fill: #fff4e7;
`
export const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-right: 20px;

  @media (max-width: 1023px) {
    gap: 5px;
  }
`

export const HeroContent = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`
export const HeroDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`
export const HeroContentDescription = styled.div`
  flex-direction: column;
  justify-content: center;
  align-items: start;
  display: flex;
  height: 100%;
  gap: 50px;

  @media (max-width: 1023px) {
    align-items: center;
    text-align: center;
  }
`
export const HeroImage = styled.div`
  justify-content: center;
  display: flex;
  height: 100%;
  width: 100%;
`

export const useStyles = makeStyles(() => ({
  topBar: {
    zIndex: '10',
    display: 'flex',
    position: 'fixed',
    left: 0,
    top: 0,
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#A68C69',
    paddingBlock: '16px',
    paddingInline: '75px',
  },
}))
