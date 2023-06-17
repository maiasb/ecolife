import { createTheme } from '@mui/material'

export const theme = createTheme({
  components: {
    // Name of the component
    MuiLink: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          fontSize: '1rem',
          fontWeight: 700,
          color: '#FFF4E7',
          // fontFamily: 'Playfair Display',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fill: '#FFF4E7',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          height: '50px',
          borderRadius: '8px',
          backgroundColor: '#9ba657',
        },
      },
    },
  },
})
