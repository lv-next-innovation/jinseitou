import * as React from "react";

import EventsForm from "../containers/events/form";
import ItosForm from "../containers/itos/form";

import ChartMap from "./chart/map";

const Main = (props: any) => (
  <div className="main">
    <EventsForm />

    <div className="main__itos">
      <ItosForm />
    </div>

    <ChartMap />
  </div>
);

export default Main;
