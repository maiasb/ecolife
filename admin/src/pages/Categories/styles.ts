import { colors, Drawer } from '@mui/material'
import { makeStyles } from '@mui/styles'
import styled from '@emotion/styled'

export const Container = styled(Drawer)``
export const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    width: '56px',
  },
  button: {
    color: colors.blueGrey[800],
    padding: '10px 8px',
    justifyContent: 'flex-start',
    textTransform: 'none',
    fontWeight: '500',
    letterSpacing: 0,
    width: '100%',
  },
  icon: {
    color: '#333333',
    display: 'flex',
    alignItems: 'center',
    minWidth: 30,
    '& svg': {
      width: 24,
      height: 24,
    },
  },
  active: {
    color: 'black',
    fontWeight: 700,
    backgroundColor: 'rgba(179, 179, 179, 0.2)',
  },
  nested: {
    // padding: 16,
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
}))

export const TextTitle = styled.span`
  flex: 1 1 auto;
  margin-top: 6px;
  margin-bottom: 3px;

  font-size: 14px;
  color: #333333;
  font-weight: 500;
  line-height: 24px;
`

export const Divider = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(243, 246, 248, 1);
  margin-bottom: 16px;
  margin-top: 16px;
  width: 100%;
`

export const DividerMenu = styled.div`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(243, 246, 248, 1);
  margin-left: 14px;
  margin-right: 15px;
`
