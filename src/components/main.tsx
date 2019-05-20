import * as React from "react";
import BlogsDetail from "./blogs/detail";
import BlogForm from "./blogs/form";

const Main = (props: any) => (
  <div className="main">

    <BlogForm />

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
