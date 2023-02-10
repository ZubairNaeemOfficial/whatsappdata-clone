import { styled, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { AccountContext } from "../../content/accountprovider";
let Imagecontainer = styled("Box")`
  display: flex;
  justify-content: center;
`;
let Image = styled("img")({
  width: "170px",
  height: "170px",
  borderRadius: "50%",
  padding: "25px 0",
});
const Wrapper = styled(Box)`
  background-color: #fff;
  padding: 12px 30px 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  &: first-child {
    font-size: 13px;
    color: #009688;
    font-weight: 200;
  }
  &: second-child {
    margin: 14px 0;
    color: #a4d4d4;
  }
`;
const Paragraph = styled(Box)`
  padding: 15px 20px 28px 30px;
  & > p{
    font-size:13px;
    color:#86960a;
  }
`;
const Profile = () => {
  const { account } = useContext(AccountContext);
  return (
    <>
      <Imagecontainer>
        <Image src={account.picture} alt="dp" />
      </Imagecontainer>
      <Wrapper>
        <Typography>Your name</Typography>
        <Typography>{account.name}</Typography>
      </Wrapper>
      <Paragraph>
        <Typography>
          This is not you user name or pin.This name will be visible to your
          WhatsApp account.
        </Typography>
      </Paragraph>
      <Wrapper>
<Typography>About</Typography>
<Typography>Eat! Code! Sleep! Repeat! </Typography>
      </Wrapper>
    </>
  );
};

export default Profile;
