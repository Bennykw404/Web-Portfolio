import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    body: 'Inter, system-ui, sans-serif',
    heading: 'Work Sans, system-ui, sans-serif',
  },
  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    primary: '#6a59d1;'
  },
  shadows: {
    largeSoft: 'rgba(60, 64, 67, 0.15) 0px 2px 10px 6px;',
  },
  styles: {
    global: {
      'html, #__next': {
        height: '100%',
      },
      '#__next': {
        display: 'flex',
        flexDirection: 'column',
      },
      '.body': {
        overflowY: 'scroll',
      },
      html: {
        scrollBehavior: 'smooth',
      },
    },
  },
})

export default theme