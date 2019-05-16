import * as React from "react";
import BlogsDetail from "./blogs/detail";
import Form from "./blogs/form";

const Main = (props: any) => (
  <div className="main">
    <Form />
    <BlogsDetail />
    <BlogsDetail />
    <BlogsDetail />
    <BlogsDetail />
    <BlogsDetail />
  </div>
);

export default Main;
