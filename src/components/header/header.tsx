import * as React from "react";
import Logo from "./logo";
import ButtonComponent from '../utils/button';

const Header = (props: any) => (
  <div className="header">
    <Logo />
    <ButtonComponent icon='th' />
  </div>
);

export default Header;
