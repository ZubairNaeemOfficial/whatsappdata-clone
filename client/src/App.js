import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState } from "react";
import { Massenger } from "./components/massenger";
import { AccountProvider } from "./context/accountprovider";



const App = () => {
  
  return (
    <>
    <GoogleOAuthProvider clientId="952722356199-i9rga61egh1cja3759hr5nt3mosro4ps.apps.googleusercontent.com">
   <AccountProvider>
    <Massenger/>
    </AccountProvider>
    </GoogleOAuthProvider>
    </>
  );
};



export default App;
