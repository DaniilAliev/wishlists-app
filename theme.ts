'use client'

import { Plus_Jakarta_Sans } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
})

const theme = createTheme({
  typography: {
    fontFamily: plusJakartaSans.style.fontFamily
  }
})

export default theme
