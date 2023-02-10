import { Box } from '@mui/material'
import React from 'react'
import Header from './header'
import SearchComponent from './search'

const Menu = () => {
  return (
   <>
   <Box>
    <Header/>
    <SearchComponent/>
   </Box>
   </>
  )
}

export default Menu