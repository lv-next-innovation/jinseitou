import * as React from "react";
import Logo from "./logo";
import ButtonComponent from "../utils/button";

const Header = (props: any) => (
  <div className="header">
    <div className="header_base left">
      <Logo />
    </div>

    <div className="header_base center" />

    <div className="header_base right">
      <div className="menu__list">
        <div className="menu">
          <ButtonComponent icon="th" />
        </div>
        <div className="user">
          <ButtonComponent icon="user" />
        </div>
      </div>
    </div>
  </div>
);

export default Header;
