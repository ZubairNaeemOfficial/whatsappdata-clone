import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import React from "react";
import Emptychat from "./emptychat";
import Menu from "./menu/menu";
const dialogueStyle = {
  height: "95%",
  width:"100%",
  margin:"15px",
  maxheight:"100%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor:"none",
  borderRadius:0,
};
const Component = styled(Box)`
  display: flex;
`;
const LeftComponent=styled(Box)`
width:450px;
`

const RightComponent=styled(Box)`
width:73%;
max-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.14);
`


const ChatDialodgue = () => {
  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogueStyle }} hideBackdrop={true} maxWidth={'md'}>
        <Component>
      <LeftComponent>
<Menu/>
      </LeftComponent>
      <RightComponent>
<Emptychat/>
      </RightComponent>
   </Component>
      </Dialog>
    </>
  )
}

export default ChatDialodgue