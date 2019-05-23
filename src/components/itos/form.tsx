import * as React from "react";

const Form = (props: any) => (
  <div className="ito__form">
    <input
      type="text"
      value={"aaa"}
      placeholder="告白した"
      onChange={e => props.changeContent(e.target.value)}
    />

    <button>Submit</button>
  </div>
);

export default Form;
