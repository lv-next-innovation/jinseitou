import * as React from "react";
import Logo from "./logo";
import ButtonComponent from "../utils/button";

const Header = (props: any) => (
  <div className="header">
    <div className="left">
      <Logo />
    </div>

    <div className="center" />

    <div className="right">
      <div className="menu">
        <ButtonComponent icon="th" />
      </div>
      <div className="user">
        <ButtonComponent icon="user" />
      </div>
    </div>
  </div>
);

export default Header;
