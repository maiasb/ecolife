import { Card as MuiCard, CardContent as MuiCardContent } from '@mui/material'
import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const CardContent = styled(MuiCardContent)`
  display: flex;
  flex-direction: column;
  padding-right: 50px;
  margin-left: -15px;
`
export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const Card = styled(MuiCard)`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 0px 15px;
`
