import { Box } from '@mui/system'
import React from 'react'
import {Search as SearchIcon } from "@mui/icons-material"
import { InputBase } from '@mui/material'
import styled from '@emotion/styled'
const SearchComponent = () => {

  let Component=styled(Box)`
  background:#fff;
  height:45px;
  border-bottom:1px solid #f2f2f2;
  display :flex;
  align-items:center;
  `
const Icon= styled(Box)`
position:absolute;
height:100%;
padding:6px 18px;
color:#919191;
`
  const Wrapper=styled(Box)`
  background-color:#f0f2f5;
  position:relative;
  margin:0 13px;
  width:100%;
  border-radius:10px;
  `
  const InputField=styled(InputBase)`
  width:100%;
  padding:16px;
  height:15px;
  padding-left:65px;
  font-size:14px;

  `
  
  return (
    <Component>
      <Wrapper>
        <Icon>
          <SearchIcon fontSize='small'/>
        </Icon>
        <InputField placeholder='Start new chat here'/>
      </Wrapper>
    </Component>
  )
}

export default SearchComponent