import * as React from "react";

import EventsForm from "../containers/events/form";
import ItosForm from "../containers/itos/form";

import ChartsMap from "../containers/charts/map";

const Main = (props: any) => (
  <div className="main">
    <EventsForm />

    <div className="main__itos">
      <ItosForm />
    </div>

    <ChartsMap />
  </div>
);

export default Main;
