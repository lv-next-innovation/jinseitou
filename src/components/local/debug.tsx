import * as React from "react";

const Debug = (props: any) => (
  <div>
    {console.log(props)}
    <button
      onClick={() => props.debug()}
  >debug</button>
  </div>
);

export default Debug;
