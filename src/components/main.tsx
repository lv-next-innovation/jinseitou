import * as React from "react";

import EventsForm from "../containers/events/form";
import EventsDetail from "./events/detail";
import ItosForm from "./itos/form";

const Main = (props: any) => (
  <div className="main">
    <EventsForm />

    <div className="main__itos">
      <ItosForm />
    </div>
  </div>
);

export default Main;
