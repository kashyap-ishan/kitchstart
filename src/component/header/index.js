import React from "react";
import Logo from "./../../asset/logo/logo_kitchen.svg";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import "./index.css";


const Header = () => {
return (
   <AppBar position="fixed" className="app-header">
      <Toolbar>
        <div style={{ flexGrow: 1 }}>
          <img className="main-header__logo link" src={Logo} alt="Shutterifie logo"  />
        </div>
      </Toolbar>
    </AppBar>
)
}

export default Header;