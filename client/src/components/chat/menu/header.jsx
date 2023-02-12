import { styled,Box, Icon } from '@mui/material'
import React, { useContext } from 'react'
import { AccountContext } from '../../../context/accountprovider'
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import { blue } from '@mui/material/colors';
import HeaderMenu from './headerMenu';

import { useState } from 'react';
import Infodrawer from '../../drawer/infodrawer';
const Component=styled(Box)`
height:44px;
background:#ededed;
padding:8px 16px;
display:flex;
align-item:center;
`
const Icons=styled(Box)`
margin-left:auto;
& > *{
  margin-left:2px;
  padding:8px;
  color:#000;
}
& : first-child{
font-size:22px;
margin-left:10px;
margin-top:4px;
}

`
const Image=styled('img')({
  border:"1px solid gray",
borderRadius:"50%",
height:'44px',
width:'44px'
})
const Header = () => {
  const [opendrawer, setOpendrawer]=useState(false)
    const {account}=useContext(AccountContext)
    console.log("img",account.picture)
    const toggleDrawer=()=>{
      setOpendrawer(true)
    }
    console.log(opendrawer)
  return (
    <>
    <Component>
    <Image src={account.picture} alt="dp" onClick={toggleDrawer}/>
    <Icons>
      <SettingsBackupRestoreIcon/>
      <ChatIcon/>
      <HeaderMenu setOpenDrawer={setOpendrawer} /> 
    </Icons>
    
    </Component>
    <Infodrawer open={opendrawer} setOpen={setOpendrawer}/>
    </>
  )
}

export default Header