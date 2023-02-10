import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { qrCodeImage } from "../consants/consants";
import React from "react";
import { useContext } from "react";
import { AccountContext } from "../../content/accountprovider";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { Adduser } from "../../service/api";

const dialogueStyle = {
  height: "96%",
  marginTop: "12%",
  width: "60%",
  maxWidth: "100%",
  boxShadow: "none",
  overflow: "hidden",
};
const Component = styled(Box)`
  display: flex;
`;
const Container = styled(Box)`
  padding: 25px;
`;
const QrCode = styled("img")({
  height: 220,
  width: 220,
  margin: "50px 0 0 50px",
});

const Title = styled(Typography)`
  font-size: 26px;
  color: gray;
  font-weight: 300;
  font-family: Arial;
  margin-bottom: 25px;
`;
const StyledList = styled(List)`
& > li{
  padding:0;
  margin-top:15px;
  font-size:18px;
  line-height:28px;
color:#4a4a4a;
}
`;

export const Login = () => {
const {setAccount}=useContext(AccountContext)

  return (
    <>
      <Dialog open={true} PaperProps={{ sx: dialogueStyle }} hideBackdrop={true}>
        <Component>
          <Container>
            <Title>To Use Watch On Your Computer</Title>
            <StyledList>
              <ListItem>1. Open on your whats app</ListItem>
              <ListItem>2. Tap Menu settings and select whatsapp web</ListItem>
              <ListItem>
                3. Point your phone to this screen to capture the code{" "}
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ marginTop: "25px",position:'relative' }}>
            <QrCode src={qrCodeImage} alt="Barcode" />
            <Box style={{position:"absolute",top:'50%',transform:'translateX(35%)'}}>
            <GoogleLogin
             onSuccess={credentialResponse => {
             
              const decode= jwtDecode(credentialResponse.credential);
              console.log(decode)
              setAccount(decode)
              Adduser(decode)
            }}
            onError={() => {
              console.log('Login Failed');
            }}
            />
            </Box>
          </Box>
        </Component>
      </Dialog>
    </>
  );
};
