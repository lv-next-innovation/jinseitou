import * as React from "react";

const Debug = (props: any) => (
  <div>
    <button onClick={() => props.debug()}>debug</button>
  </div>
);

export default Debug;
