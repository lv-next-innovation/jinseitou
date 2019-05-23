import * as React from "react";

import Header from "./header/header";

import Debug from "../containers/local/debug";
import Main from "../containers/main";

const Top = (props: any) => (
  <div>
    <Header />
    <Main />
    <Debug />
  </div>
);

export default Top;
