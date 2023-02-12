import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import React, { useContext } from "react";
import { AccountContext } from "../../context/accountprovider";
import { Chatbox } from "./chat/chatbox";

import Emptychat from "./emptychat";
import Menu from "./menu/menu";
const dialogueStyle = {
  height: "95%",
  width: "100%",
  margin: "15px",
  maxheight: "100%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
  backgroundColor: "none",
  borderRadius: 0,
};
const Component = styled(Box)`
  display: flex;
`;
const LeftComponent = styled(Box)`
  width: 450px;
`;

const RightComponent = styled(Box)`
  width: 73%;
  height: 100%;
  border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const ChatDialodgue = () => {
  const { person } = useContext(AccountContext);
  return (
    <>
      <Dialog
        open={true}
        PaperProps={{ sx: dialogueStyle }}
        hideBackdrop={true}
        maxWidth={"md"}
      >
        <Component>
          <LeftComponent>
            <Menu />
          </LeftComponent>
          <RightComponent>
            {Object.keys(person).length ? <Chatbox /> : <Emptychat />}
          </RightComponent>
        </Component>
      </Dialog>
    </>
  );
};

export default ChatDialodgue;
