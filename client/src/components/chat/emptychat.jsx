import { Box, Typography } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { emptyChatImage } from '../consants/consants'
const Component=styled(Box)`
background-color:#f8f9fa;
padding:30px 0px;
text-align:center;
height:110%;
width:fit-content;

`
const Container=styled(Box)`
padding:0px 400px;
`
const Image=styled('img')({
  width:400,
  marginTop:100,
 
})
const Emptychat = () => {
  return (
    <Component>
    <Container>
      <Image src={emptyChatImage} alt="chat"/>
      <Typography>WhatsApp Web</Typography>
      <Box>
      <Typography>Send and receive messages without keeping your phone online.</Typography>
      <Typography>Use WhatsApp on up to 4 linked devices and 1 phone at the same time.</Typography>
    </Box>
    </Container>
    </Component>
  )
}

export default Emptychat