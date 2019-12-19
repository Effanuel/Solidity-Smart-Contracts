import React from "react";
import { BarLoader } from "react-spinners";
function SpinnerComponent({ loading, height }) {
  return (
    <div>
      <BarLoader
        color="#00ca45"
        loading={loading}
        height={height}
        width={"1vw"}
      />
    </div>
  );
}

export { SpinnerComponent };
