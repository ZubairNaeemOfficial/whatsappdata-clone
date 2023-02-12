import styled from '@emotion/styled'
import { Box, Divider } from '@mui/material'
import React, { useEffect, useState, useContext } from 'react'
import { AccountContext } from '../../../context/accountprovider'
import { getUser } from '../../../service/api'
import Conversation from './conversation'
 
const Component=styled(Box)`
height:81px;
overflow:overlay;
`
const StyleDivider=styled(Divider)`
margin:0 0 0 70px;
background:#e9edef;
opacity:0.3;
`

const Conversations = () => {
  const [user, setUser]=useState([])
const {account}=useContext(AccountContext)

  useEffect(()=>{
  const fetch=async()=>{
let response=await getUser();

setUser(response)
  }
  fetch()
},[])
return (
  <Component>
{
  user.map((users)=>(
// users.sub!== account.sub &&
<>
<Conversation user={users}/>
<StyleDivider/>
</>
  ))
}
  </Component>
  )
}

export default Conversations