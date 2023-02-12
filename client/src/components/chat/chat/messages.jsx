import { styled,Box } from '@mui/material'
import React from 'react'
import Footer from './footer'

const Wrapper=styled(Box)`
background-image:url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
`
const Component=styled(Box)`
height:75vh;
overflow-y:scroll;
`
export const Messages = () => {
  return (
   <Wrapper>
    <Component>

    </Component>
    <Footer/>
   </Wrapper>
  )
}
