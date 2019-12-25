import React from "react";
import { BarLoader } from "react-spinners";

import "./styles.css";

function SpinnerComponent({ loading }) {
  return (
    <div>
      <BarLoader color="#00ca45" loading={loading} width={"1vw"} />
    </div>
  );
}

export { SpinnerComponent };
