import { AttachFile, EmojiEmotionsOutlined, Mic } from "@mui/icons-material";
import { Box, InputBase } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";

const Container = styled(Box)`
  height: 55px;
  display: flex;
  background-color: #ededed;
  align-items: center;
  width: 100%;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #191919;
  }
`;

const Search = styled(Box)`
  background-color: #ffffff;
  border-radius: 12px;
  width: calc(96% - 100px);
`;
const Inputbase=styled(InputBase)`
padding:20px;
height:20px;
width:100%;
padding-left:40px;
font-size:14px;
`
const Footer = () => {
  return (
    <Container>
      <EmojiEmotionsOutlined />
      <AttachFile style={{transform:'rotate(40deg)'}} />
      <Search>
        <Inputbase placeholder="Type a message" />
      </Search>
      <Mic />
    </Container>
  );
};

export default Footer;
