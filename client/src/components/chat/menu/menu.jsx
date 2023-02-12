import { Box } from '@mui/material'
import React from 'react'
import Conversations from './conversations'
import Header from './header'
import SearchComponent from './search'

const Menu = () => {
  return (
   <>
   <Box>
    <Header/>
    <SearchComponent/>
    <Conversations/>
   </Box>
   </>
  )
}

export default Menu