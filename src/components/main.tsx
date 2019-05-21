import * as React  from "react";

import BlogsDetail from "./events/detail";
import BlogsForm   from "../containers/events/form";

const Main = (props: any) => (
  <div className="main">

    <BlogsForm />

    <div className="main__blogs">
      <p className="main__blogs__title">ブログ一覧</p>
      <BlogsDetail />
      <BlogsDetail />
      <BlogsDetail />
      <BlogsDetail />
      <BlogsDetail />
    </div>
  </div>
);

export default Main;
