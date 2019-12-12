import React from "react";

import "./styles.css";

function TitleComponent({ manager }) {
  return (
    <div className="main">
      <h1>Welcome to a Lottery!</h1>
      <p>
        This lottery is hosted by <b>{manager}.</b>
      </p>
    </div>
  );
}

export { TitleComponent };
