import React from 'react'
import {AppBar,Toolbar,styled} from "@mui/material"
import { Login } from './account/login'
import { Box } from '@mui/system'
import { useContext } from 'react'
import { AccountContext } from '../content/accountprovider'
import ChatDialodgue from './chat/chatdialodgue'
const Component=styled(Box)`
height:100vh;
margin-left:-10px;
margin-right:-25px;
width:auto;
background-color:#DCDCDC;
`
const Header= styled(AppBar)`
height:225px;
background-color:#00bfa5;
box-shadow:none;
`

const ChatHeader= styled(AppBar)`
height:120px;
background-color:#00A884;
box-shadow:none;
`
export const Massenger = () => {
const {account}=useContext(AccountContext)

  return (
    <Component>
      {
        account ? 
        <>
        <ChatHeader>
      <Toolbar>
        <ChatDialodgue/>
      </Toolbar>
    </ChatHeader>
        
        </> 
        :
        <>
     <Header>
      <Toolbar>
        
      </Toolbar>
    </Header>
 <Login/>
 </>}
    </Component>
  )
}
