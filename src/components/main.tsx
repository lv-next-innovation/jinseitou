import * as React  from "react";

import EventsDetail from "./events/detail";
import EventsForm   from "../containers/events/form";

const Main = (props: any) => (
  <div className="main">

    <EventsForm />

    <div className="main__events">
      <p className="main__events__title">ブログ一覧</p>
      <EventsDetail />
      <EventsDetail />
      <EventsDetail />
      <EventsDetail />
      <EventsDetail />
    </div>
  </div>
);

export default Main;
