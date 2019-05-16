import * as React from "react";
import BlogsDetail from "./blogs/detail";
import BlogForm from "./blogs/form";

const Main = (props: any) => (
  <div className="main">
    <BlogForm />
    <BlogsDetail />
    <BlogsDetail />
    <BlogsDetail />
    <BlogsDetail />
    <BlogsDetail />
  </div>
);

export default Main;
