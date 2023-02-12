import { Box } from '@mui/material'
import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/accountprovider'
import { ChatHeader } from './chat-header'
import { Messages } from './messages'

export const Chatbox = () => {
  const {person}=useContext(AccountContext)
  return (
    <Box style={{height:'75%'}}>
      <ChatHeader person={person}/> 
      <Messages person={person}/> 
    </Box>
  )
}
