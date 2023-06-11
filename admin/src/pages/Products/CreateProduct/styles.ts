import { CardContent as MuiCardContent } from '@mui/material'
import styled from 'styled-components'

export const CardContent = styled(MuiCardContent)`
  display: flex;
  flex-direction: column;
  gap: 15px;
`

export const CardContentRow = styled.div`
  display: flex;
  gap: 15px;
`

export const CardContentButtons = styled.div`
  display: flex;
  justify-content: space-between;
`
