import { Box, styled, Typography } from '@mui/material'
import {Search,  MoreVert } from '@mui/icons-material'
import React from 'react'

const Header=styled(Box)`
height:30px;
background:#ededed;
padding:8px 16px;
display:flex;
align-items:center;
`
const Image=styled('img')({
  height:40,
  width:40,
  objectFit:'cover',
  borderRadius:'50%',
})

const Name=styled(Typography)`
margin-left:12px !important;
`
const Status=styled(Typography)`
margin-left:12px !important;
font-size:12px;
color:rgba(0,0,0,0.6)
`
const RightContainer=styled(Typography)`
margin-left:auto !important;
& > svg{
  padding:8px;
  font-size:24px;
  color:#000;
}
`
export const ChatHeader = ({person}) => {
  return (
    <Header>
      <Image src={person.picture} alt='dp' />
<Box>
<Name>{person.name}</Name>
<Status>Online</Status>
</Box>
<RightContainer>
  <Search/>
  <MoreVert/>
</RightContainer>
    </Header>
  )
}
