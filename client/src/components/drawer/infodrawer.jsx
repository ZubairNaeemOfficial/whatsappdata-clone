import React from "react";
import { Box, Drawer, styled, Typography } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import Profile from "./profile";

const Component = styled(Box)`
  background-color: #008069;
  height: 107px;
  color: white;
  display: flex;
  & > svg,
  & > p {
    margin-top: auto;
    padding: 10px;
    font-weight: 600;
  }
`;
const drawstyle = {
  left: 16,
  top: 33,
  width: "33%",
  height: "95%",
};
const Text = styled(Typography)`
  font-size: 18px;
`;
const Component2 = styled(Box)`
  background-color: #ededed;
  height: 85%;
  color: black;
`;
const Infodrawer = ({ open, setOpen }) => {
  const handleclose = () => {
    setOpen(false);
  };
  return (
    <Drawer
      open={open}
      PaperProps={{ sx: drawstyle }}
      style={{ zIndex: 1999 }}
    >
      <Component>
        <ArrowBack onClick={()=>handleclose()} />
        <Text>Profile</Text>
      </Component>
      <Component2>
        <Profile />
      </Component2>
    </Drawer>
  );
};

export default Infodrawer;
