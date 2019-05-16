import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

import fontawesome from "./fontawesome";
fontawesome;

interface Props {
  icon: IconProp;
}

const Button = (props: Props) => {
  const icon = props.icon;

  return <FontAwesomeIcon icon={icon} className="icon" />;
};

export default Button;
