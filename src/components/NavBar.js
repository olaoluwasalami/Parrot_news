// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="pa3 pa4-ns bg-light">
      <h2 className="link black b f4 f5-ns3 dib mr3">Parrot News </h2>
      
      {!isAuthenticated &&  (
        <button   onClick={() => loginWithRedirect({})} 
        className="f6 link ba ph3 pv2 mb2 bg-white mr5 dib black fr">Log in</button>
      )}

      {isAuthenticated && <button 
       className="f6 link dim ba ph3 pv2 mb2 bg-white mr5 dib black fr"
         onClick={() => logout()}>
        Log out</button>}
 
    </div>
  );
};

export default NavBar;